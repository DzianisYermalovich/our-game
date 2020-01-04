import { Injectable } from '@angular/core';
import {BaseHttp} from '../data/http/base-http';
import {HttpClient} from '@angular/common/http';
import {AuthRequest} from '../../_models/auth-request';
import {Observable} from 'rxjs';
import {AuthResponse} from '../../_models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService extends BaseHttp {

  constructor(protected http: HttpClient) {
    super(http, '/auth');
  }

  getToken(authRequest: AuthRequest): Observable<AuthResponse> {
    const url = this.prefix + '/token';
    return this.http.post<AuthResponse>(url, authRequest);
  }
}
