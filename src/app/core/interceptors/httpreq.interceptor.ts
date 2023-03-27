import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppService} from "../../app.service";

@Injectable()
export class HTTPReqInterceptor implements HttpInterceptor {

  private token: string = '';
  constructor(private appService: AppService) {
    this.token = appService.getToken();
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Req Interceptor');
    return next.handle(
      request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Accept': 'application/json'
        })
      })
    );
  }
}
