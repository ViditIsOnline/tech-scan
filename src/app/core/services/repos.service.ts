import { Observable } from 'rxjs/Observable';
import { URLs, ROWS_PER_VIEW } from './../../config/config';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ReposService {

  constructor(private http: Http) { }

  getRepos(lang: string, pageNumber: number, term?: string) {

    const params = new URLSearchParams();
    params.append('q', term ? term : '' + 'language:' + lang);
    params.append('page', pageNumber.toString());
    params.append('per_page', ROWS_PER_VIEW.toString());

    const options = new RequestOptions();
    options.params = params;

    return this.http.get(URLs.repos, options)
      .map((response) => response.json());
  }

  search(terms: Observable<string>, lang: string, pageNumber: number) {
    return terms.debounceTime(300)
    .distinctUntilChanged()
    .switchMap(term => this.getRepos(lang, pageNumber, term));
  }
}
