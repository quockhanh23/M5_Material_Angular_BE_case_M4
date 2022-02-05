import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {DialogFailComponent} from "../Notification/dialog-fail/dialog-fail.component";
import {DialogRegisterComponent} from "../Notification/dialog-register/dialog-register.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.min(2)]),
    password: new FormControl('',[Validators.required,Validators.min(2)],),
    confirmPassword: new FormControl('',[Validators.required,Validators.min(2)],)
  });

  constructor(private userService: UserService,
              private router: Router,
              public dialog: MatDialog) {
  }

  openDialogSuccess() {
    this.dialog.open(DialogRegisterComponent);
  }

  openDialogFail() {
    this.dialog.open(DialogFailComponent);
  }

  ngOnInit(): void {
  }

  register() {
    let user = this.registerForm.value
    this.userService.register(user).subscribe(rs => {
      console.log(rs)
      this.openDialogSuccess()
      this.router.navigateByUrl("/login").then()
    }, error => {
      console.log(error)
      this.openDialogFail()
    })
  }
}
