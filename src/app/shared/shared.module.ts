import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageBarComponent } from './components/language-bar/language-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  MdTableModule,
  MdToolbarModule,
  MdCardModule,
  MdListModule,
  MdIconModule,
  MdPaginatorModule,
  MdProgressSpinnerModule,
  MdTabsModule,
  MdInputModule
} from '@angular/material';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MdTableModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdPaginatorModule,
    MdProgressSpinnerModule,
    MdTabsModule,
    MdInputModule
  ],
  declarations: [LanguageBarComponent, NavbarComponent],
  exports: [
    LanguageBarComponent,
    NavbarComponent,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdPaginatorModule,
    MdProgressSpinnerModule,
    MdTabsModule,
    MdInputModule]
})
export class SharedModule { }
