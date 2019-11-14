import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/User';
import {NgForm} from '@angular/forms';

const serverUrl = 'https://rent-cars-app.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  registerUser(user: User): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(user.email + ':' + user.password)
      })
    };
    return this.http.post<User>(serverUrl + '/registration', {
      first_name: user.first_name,
      second_name: user.second_name,
    }, httpOptions).toPromise();
  }

  deleteUser(email: string, password: string): Promise<void> {
    console.log(email + ':' + password);
    const authHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(email + ':' + password)
    });
    return this.http.delete<void>(serverUrl + '/user', {headers: authHeader}).toPromise();
  }

  updateUser(user: User, oldPassword: string): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(user.email + ':' + oldPassword),
        'X-New-Password': user.password
      })
    };
    return this.http.post<User>(serverUrl + '/registration', {
      first_name: user.first_name,
      second_name: user.second_name
    }, httpOptions).toPromise();
  }


}
