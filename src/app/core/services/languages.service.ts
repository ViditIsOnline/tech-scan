import { Observable } from 'rxjs/Observable';
import { ReposService } from './repos.service';
import { Injectable } from '@angular/core';
import { LanguageBarDataSource } from '../../shared/modals/languagebar-datasource';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class LanguagesService {

  data = [
    { name: 'python', lang: 'Python', repos: undefined },
    { name: 'js', lang: 'JavaScript', repos: undefined },
    { name: 'c', lang: 'C', repos: undefined },
    { name: 'cpp', lang: 'C++', repos: undefined },
    { name: 'cs', lang: 'C#', repos: undefined },
    { name: 'html', lang: 'HTML', repos: undefined },
    { name: 'java', lang: 'JAVA', repos: undefined },
    { name: 'php', lang: 'PHP', repos: undefined },
    { name: 'ruby', lang: 'Ruby', repos: undefined },
    { name: 'go', lang: 'GO', repos: undefined }
  ];

  fetchedCount = false;
  constructor(private reposService: ReposService) { }

  getLanguages() {
    return this.data;
  }

  getLanguagesDataSource() {
    // tslint:disable-next-line:prefer-const
    let observableArray = [];
    return Observable.create((observer: Observer<any>) => {
      if (!this.fetchedCount) {
        this.data.forEach((language, index) => {
          observableArray.push(this.reposService.getRepos(language.lang, 1));
        });
        Observable.forkJoin(observableArray).subscribe(result => {
          result.forEach((resp, index) => {
            this.setData(index, resp);
          });
          this.fetchedCount = true;
          observer.next(new LanguageBarDataSource(this.data));
          observer.complete();
        });
      } else {
        observer.next(new LanguageBarDataSource(this.data));
        observer.complete();
      }
    });
  }

  getLanguage(name: string) {
    return this.data.find(x => x.name === name).lang;
  }

  getCount(name: string) {
    if (this.fetchedCount) {
      return this.data.find(x => x.name === name).repos;
    } else {
      return 0;
    }
  }

  setData(index, response) {
    this.data[index].repos = response.total_count;
  }
}
