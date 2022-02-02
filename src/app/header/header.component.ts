import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("currentUser") != null) {
      return true;
    }
    return false;
  }

  logOut() {
    this.authService.logout();
  }

}
