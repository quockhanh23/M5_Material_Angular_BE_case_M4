import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | null = ''
  constructor(private authService: AuthenticationService,
              private toarts: ToastrService,) {
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
