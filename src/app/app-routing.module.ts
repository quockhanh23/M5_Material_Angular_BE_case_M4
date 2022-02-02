import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {MasterComponent} from "./master/master.component";
import {RegisterComponent} from "./register/register.component";
import {HomeDetailComponent} from "./home-detail/home-detail.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'list',
    component: MasterComponent
  },
  {
    path: 'detail/:id',
    component: HomeDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
