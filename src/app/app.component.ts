import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public infoContent = '';

  constructor(private http: HttpClient) {}

  public onInfoClick() {
    this.http.get('http://localhost:8080/getInfo', {responseType: 'text'}).subscribe(response => {
      this.infoContent = response;
    });
  }
}
