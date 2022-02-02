import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {first} from "rxjs";
import {DialogLogin1Component} from "../Notification/dialog-login1/dialog-login1.component";
import {DialogLoginRulesComponent} from "../Notification/dialog-login-rules/dialog-login-rules.component";
import {DialogLogin2Component} from "../Notification/dialog-login2/dialog-login2.component";

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

  openDialogLoginFail() {
    this.dialog.open(DialogLogin2Component);
  }

  openDialogRules() {
    this.dialog.open(DialogLoginRulesComponent);
  }

  openDialogLoginSuccess() {
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

          this.openDialogRules()
          this.openDialogLoginSuccess()
          if (data.roles[0].authority == "ROLE_ADMIN") {
            this.router.navigate([this.adminUrl]).then()
          } else {
            this.router.navigate([this.returnUrl]).then()
          }
          console.log(data)

        },
        error => {
          console.log('error:' + error)
          this.openDialogLoginFail()
          this.loading = false;
        });
  }
}
