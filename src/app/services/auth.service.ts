import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private httpClient: HttpClient) {}

  setUserData(data: any): void {
    localStorage.setItem('userData', data);
  }

  getUserData(): string | null {
    return localStorage.getItem('userData');
  }

  isLoggedIn() {
    return this.getUserData() !== null;
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':'application/json;charset=UTF-8'
      })
    }
    let data = new FormData;
    data.append("email", email)
    data.append("password", password)
    return this.httpClient.post("http://192.168.1.19:8080/Auth/Login", data, httpOptions);
  }
}