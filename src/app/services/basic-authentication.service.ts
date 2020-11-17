import { API_URL } from './../../app.constants';
import { AuthenticationBean } from './../model/authentication-bean';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable()
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeJWTAuthenticationService(username, password) {
    return this.httpClient.post<any>(`${API_URL}/authenticate`, {username, password})
                          .pipe(map(data => {
                            sessionStorage.setItem(AUTHENTICATED_USER, username);
                            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
                            return data;
                          }));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);

    return user !== null;
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}
