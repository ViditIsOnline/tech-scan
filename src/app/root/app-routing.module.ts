import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: '../views/home/home.module#HomeModule'
      },
      {
        path: 'repos',
        loadChildren: '../views/repos/repos.module#ReposModule'
      },
      {
        path: 'user',
        loadChildren: '../views/user/user.module#UserModule'
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
