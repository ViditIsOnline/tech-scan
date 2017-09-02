import { LanguagesService } from './../../../core/services/languages.service';
import { Component, OnInit } from '@angular/core';
import { LanguageBarDataSource } from '../../modals/languagebar-datasource';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

  displayedColumns = ['lang', 'repos'];
  dataSource: LanguageBarDataSource;

  constructor(private langService: LanguagesService) {
    this.langService.getLanguagesDataSource().subscribe((res) => {
      this.dataSource = res;
    });
  }

  ngOnInit() {
  }

}
