import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../../core/services/users.service';
import { ReposService } from './../../../../core/services/repos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentUser: string;
  userDetails: any;
  repos: Array<any>;
  starredRepos: Array<any>;
  followers: Array<any>;
  following: Array<any>;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
    this.currentUser = this.activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.usersService.getUserDetails(this.currentUser).subscribe((resp) => {
      this.userDetails = resp;
    });
    this.usersService.getUserRepos(this.currentUser).subscribe((resp) => {
      this.repos = resp;
    });

    this.usersService.getStarredRepos(this.currentUser).subscribe((resp) => {
      this.starredRepos = resp;
    });

    this.usersService.getFollowers(this.currentUser) .subscribe((resp) => {
      this.followers = resp;
    });

    this.usersService.getFolllowing(this.currentUser) .subscribe((resp) => {
      this.following = resp;
    });
  }
}
