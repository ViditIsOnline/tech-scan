import { LanguagesService } from './../../../../core/services/languages.service';
import { ReposService } from './../../../../core/services/repos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  languageName: string;
  language: string;
  reposCount: number;
  currentPageNumber = 1;
  repos: Array<any>;
  searchTerm$ = new Subject<string>();

  constructor(private activateRoute: ActivatedRoute, private reposService: ReposService, private langService: LanguagesService) {
    this.languageName = this.activateRoute.snapshot.params['lang'];
    this.language = this.langService.getLanguage(this.languageName);
    this.reposCount = 0;
  }

  ngOnInit() {
    this.getRepos();
    this.reposService.search(this.searchTerm$, this.language, this.currentPageNumber)
      .subscribe(data => {
        this.repos = data.items;
        this.reposCount = data.total_count;
      });
  }

  getRepos() {
    this.reposService.getRepos(this.language, this.currentPageNumber).subscribe((data) => {
      this.repos = data.items;
      this.reposCount = data.total_count;
    });
  }

  pageChanged(evt) {
    this.currentPageNumber = evt.pageIndex + 1;
    this.getRepos();
  }

}
