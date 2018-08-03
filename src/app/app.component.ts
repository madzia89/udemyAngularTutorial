import { Component } from '@angular/core';
import { Customer } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customer: Customer = {
    name: "Jan Kowalski",
    photoUrl: '../assets/images/examplePicture.jpg',
    age: 22,
    description: "VIP",
    address: {
      street: "Złota",
      houseNumber: 13,
      city: "Warszawa"
    }

  }

  nameColor: string = 'blue'
  isActive: boolean = true
  //czy dobrze rozumiem, że to co jest powyżej to stan wg react??????

  constructor(){
    
  }
  changeColor(){
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue'
    //zmiana koloru nagłówka w zależności od tego jaki kolor jest obecnie
  }
}
