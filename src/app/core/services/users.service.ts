import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URLs } from '../../config/config';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUserDetails(user: string) {
    return this.http.get(URLs.user(user))
      .map((response) => response.json());
  }

  getUserRepos(user: string) {
    return this.http.get(URLs.userRepos(user))
      .map((response) => response.json());
  }

  getStarredRepos(user: string) {
    return this.http.get(URLs.starredRepos(user))
      .map((response) => response.json());
  }

  getFollowers(user: string) {
    return this.http.get(URLs.followers(user))
      .map((response) => response.json());
  }

  getFolllowing(user: string) {
    return this.http.get(URLs.following(user))
      .map((response) => response.json());
  }
}
