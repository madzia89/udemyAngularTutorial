import { Component } from '@angular/core';
import { Customer, CustomerType } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate: number = Date.now()

  constructor() {
  }

}
