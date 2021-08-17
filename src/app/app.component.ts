import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public infoContent = '';

  constructor(private http: HttpClient) {}

  public onInfoClick() {
    this.http.get('http://localhost:8080/getInfo', {
      responseType: 'text',
      headers: new HttpHeaders({
        Authorization: '12345'
      })
    }).subscribe({
      next: response => {
        this.infoContent = response;
      },
      error: err => {
        alert(err.error);
      }
    });
  }
}
