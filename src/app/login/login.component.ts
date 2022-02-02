import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {DialogComponent} from "../Notification/dialog/dialog.component";
import {first} from "rxjs";
import {DialogFailComponent} from "../Notification/dialog-fail/dialog-fail.component";

import {DialogLogin1Component} from "../Notification/dialog-login1/dialog-login1.component";
import {DialogLoginRulesComponent} from "../Notification/dialog-login-rules/dialog-login-rules.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  // @ts-ignore
  returnUrl: string;
  // @ts-ignore
  adminUrl: string;
  error = '';
  loading = false;
  submitted = false;

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService
  ) {
    console.log(this.authenticationService.currentUserValue);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  openDialog2() {
    this.dialog.open(DialogFailComponent);
  }

  openDialog3() {
    this.dialog.open(DialogLoginRulesComponent);
  }
  openDialog4() {
    this.dialog.open(DialogLogin1Component);
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/list';
    this.adminUrl = '/admin'
  }

  login() {

    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          // @ts-ignore
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          // @ts-ignore
          localStorage.setItem('ROLE', data.roles[0].authority);
          // @ts-ignore
          localStorage.setItem('USERNAME', data.username);
          // @ts-ignore

          this.openDialog3()
          this.openDialog4()
          if (data.roles[0].authority == "ROLE_ADMIN") {
            this.router.navigate([this.adminUrl])
          } else {
            this.router.navigate([this.returnUrl]);
          }
          console.log(data)

        },
        error => {
          this.openDialog2()
          this.loading = false;
        });
  }

}
