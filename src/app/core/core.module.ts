import { UsersService } from './services/users.service';
import { ReposService } from './services/repos.service';
import { LanguagesService } from './services/languages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LanguagesService, ReposService, UsersService]
})
export class CoreModule { }
