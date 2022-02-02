import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeListComponent} from "./home-list/home-list.component";
import {LoginComponent} from "./login/login.component";
import {MasterComponent} from "./master/master.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: MasterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
