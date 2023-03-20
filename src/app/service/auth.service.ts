import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl = 'https://dummyjson.com/auth/login';
  constructor(private http: HttpClient) {

  }
  ProceedLogin(UserCred: any) {
    return this.http.post(this.apiurl, UserCred);
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  GetToken() {
    return localStorage.getItem('token') || '';
  }
  HaveAccess() {
    var role = localStorage.getItem('Role') || '';
    // var _extractedtoken = role.split('.')[1];
    // var _atobdata = atob(_extractedtoken);
    // var _finaldata = JSON.parse(_atobdata);
    if (role == "Admin") {
      return true;
    } else {
      alert('you not having access');
      return false
    }
  }
}
