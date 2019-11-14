import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Auth, AuthResponse} from '../interfaces/Auth';
import {tap} from 'rxjs/operators';

const serverUrl = 'https://rent-cars-app.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(email, password): Observable<any> {
    const authToken = btoa(email + ':' + password);
    localStorage.setItem('token', authToken);
    const httpOptions = {
      headers: new HttpHeaders({
          Authorization: 'Basic ' + authToken
        },
      ),
    };
    return this.http.get(serverUrl + '/user/login', httpOptions).pipe(tap(this.setToken));
  }

  // logout() {
  //
  // }

  // isAuthentificated(): boolean {
  //   return !!this.token;
  // }

  private setToken(response: AuthResponse) {
    const expDate = new Date(new Date().getTime() + +response.expireIn * 1000);
  }


}
