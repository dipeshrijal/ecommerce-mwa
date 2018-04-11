import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = null;

    if(localStorage.getItem('token') === null) {
      authReq = req.clone({setHeaders: {}});
    } else {
      authReq = req.clone({setHeaders: {token: localStorage.getItem('token')}});
    }

    // authReq = req.clone({setHeaders: {}});


    // const authReq = req.clone({setHeaders: {token: localStorage.getItem('token')}});
    // const authReq = req.clone({setHeaders: {token: null}});
    return next.handle(authReq);
  }
}
