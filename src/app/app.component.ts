import { Component } from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http";
import {UserModel} from "./core/models/user.model";
import {AUTH_TOKEN} from "./core/models/auth.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public infoContent = '';

  private token = '';

  constructor(private http: HttpClient) {}

  public onInfoClick() {
    this.http.get('http://localhost:8080/getInfo', {
      responseType: 'text',
      context: new HttpContext().set(AUTH_TOKEN, this.token)
    }).subscribe({
      next: response => {
        this.infoContent = response;
      },
      error: err => {
        alert(err.error);
      }
    });
  }

  public onLoginClick() {
    this.http.post<UserModel>('http://localhost:8080/login', {}).subscribe({
      next: userInfo => {
        this.token = userInfo.token;
      },
      error: err => {
        console.error(err.error);
        alert(err.error);
      }
    });
  }
}
