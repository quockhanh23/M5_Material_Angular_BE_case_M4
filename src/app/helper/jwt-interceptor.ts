import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import {Observable} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor { //Interceptor: đánh chặn, đại loại là thêm 1 thao tác vào trước 1 bước tương tác với http
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      });
    }

    return next.handle(request);
  }
}
