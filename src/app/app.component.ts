import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date: string;
  time: string;
  constructor() {
    setInterval(() => {
      this.date = new Date().toLocaleDateString();
      this.time = new Date().toLocaleTimeString();
    }, 100);
  }
}
