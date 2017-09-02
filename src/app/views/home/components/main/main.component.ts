import { LanguagesService } from './../../../../core/services/languages.service';
import { LanguageBarDataSource } from './../../../../shared/modals/languagebar-datasource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dataSource: Array<any>;
  constructor(private langService: LanguagesService) {}

  ngOnInit() {
    this.dataSource = this.langService.getLanguages();
  }

}
