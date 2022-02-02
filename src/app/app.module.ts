import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './category/category.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeCreateComponent } from './home-create/home-create.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './Notification/dialog/dialog.component';
import {MaterialModule} from "./material/material.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DialogFailComponent } from './Notification/dialog-fail/dialog-fail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { DialogLogoutComponent } from './Notification/dialog-logout/dialog-logout.component';
import { DialogLogin1Component } from './Notification/dialog-login1/dialog-login1.component';
import { DialogLoginRulesComponent } from './Notification/dialog-login-rules/dialog-login-rules.component';
import { DialogRegisterComponent } from './Notification/dialog-register/dialog-register.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CategoryComponent,
    CommentCreateComponent,
    HomeListComponent,
    HomeCreateComponent,
    HomeDetailComponent,
    DialogComponent,
    LoginComponent,
    RegisterComponent,
    DialogFailComponent,
    FooterComponent,
    HeaderComponent,
    MasterComponent,
    DialogLogoutComponent,
    DialogLogin1Component,
    DialogLoginRulesComponent,
    DialogRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
