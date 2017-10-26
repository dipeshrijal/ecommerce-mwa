import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // note you need to preceed your token with sring 'Bearer ', its' part of JWT protocol
    // otherwise sever won't be able to decode it even if you are passing a correct token
    const authReq = req.clone({setHeaders: {token: localStorage.getItem('token')}});
    return next.handle(authReq);
  }
}
