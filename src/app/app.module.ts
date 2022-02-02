import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommentListComponent} from './comment-list/comment-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryComponent} from './category/category.component';
import {CommentCreateComponent} from './comment-create/comment-create.component';
import {HomeListComponent} from './home-list/home-list.component';
import {HomeCreateComponent} from './home-create/home-create.component';
import {HomeDetailComponent} from './home-detail/home-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MasterComponent} from './master/master.component';
import {DialogComponent} from './Notification/dialog/dialog.component';
import {DialogFailComponent} from './Notification/dialog-fail/dialog-fail.component';
import {DialogLogoutComponent} from './Notification/dialog-logout/dialog-logout.component';
import {DialogLogin1Component} from './Notification/dialog-login1/dialog-login1.component';
import {DialogLoginRulesComponent} from './Notification/dialog-login-rules/dialog-login-rules.component';
import {DialogRegisterComponent} from './Notification/dialog-register/dialog-register.component';
import {DialogLogin2Component} from './Notification/dialog-login2/dialog-login2.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";


const DialogComponents = [
  DialogComponent,
  DialogFailComponent,
  DialogLogoutComponent,
  DialogLogin1Component,
  DialogLoginRulesComponent,
  DialogRegisterComponent,
  DialogLogin2Component
]

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CategoryComponent,
    CommentCreateComponent,
    HomeListComponent,
    HomeCreateComponent,
    HomeDetailComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    MasterComponent,
    DialogComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
