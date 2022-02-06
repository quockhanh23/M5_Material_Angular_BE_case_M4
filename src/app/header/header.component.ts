import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | null = ''
  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('USERNAME')!= null) {
      this.username=localStorage.getItem('USERNAME');
      return true;
    }
    return false
  }

  logOut() {
    localStorage.clear();
    this.authService.logout();
  }

}
