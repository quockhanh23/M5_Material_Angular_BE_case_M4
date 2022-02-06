import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {UserToken} from "../models/user-token";
import {MatDialog} from "@angular/material/dialog";
import {DialogLogoutComponent} from "../Notification/dialog-logout/dialog-logout.component";
import {ToastrService} from "ngx-toastr";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;

  constructor(private http: HttpClient, public dialog: MatDialog, private toarts: ToastrService,) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(API_URL + '/login', {username, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  openDialog() {
    this.dialog.open(DialogLogoutComponent);
  }

  logout() {
    this.openDialog()
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
    this.openToartsLogout()
  }

  openToartsLogout() {
    setTimeout(() => {
      this.toarts.info('Đăng nhập để có thể sử dụng các dịch vụ của chúng tôi', 'Chú ý !')
    }, 5000)
  }
}
