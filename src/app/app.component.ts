import { Component } from '@angular/core';
import { Customer, CustomerType } from './model'

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
    },
    type: CustomerType.Premium
  }

  nameColor: string = 'blue'
  isActive: boolean = true
  showPhoto: boolean = false

  CustomerType = CustomerType 
  //powyższy zapis pozwala na uzycie CustomerType jako obiektu js dlatego też możemy go użyć w app.component.html w ngSwitch

  constructor(){
  }

  changeColor(){
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue'
  }
}
