import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-login-rules',
  templateUrl: './dialog-login-rules.component.html',
  styleUrls: ['./dialog-login-rules.component.css']
})
export class DialogLoginRulesComponent implements OnInit {
  username: string | null = ''
  constructor() { }

  ngOnInit(): void {
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('USERNAME')!= null) {
      this.username=localStorage.getItem('USERNAME');
      return true;
    }
    return false
  }
}
