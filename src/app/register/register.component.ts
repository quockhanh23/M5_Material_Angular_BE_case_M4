import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DialogComponent} from "../Notification/dialog/dialog.component";
import {User} from "../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(private userService: UserService,
              private router: Router,
              public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
  }

  register() {
    let user = this.registerForm.value
    let newUser: User = {
      id: "", roles: [],
      username: user.username,
      password: user.password,
      confirmPassword: user.confirmPassword
    }
    this.userService.register(user).subscribe(rs => {
      console.log(rs)
      this.openDialog()
      this.router.navigateByUrl("/login")
    }, error => {
      console.log(error)
      alert("Oops! Something has been wrong. Please try again! ")

    })
  }
}
