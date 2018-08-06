import { Component } from '@angular/core';
import { Customer, CustomerType } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers: Customer[] = [
    {
      name: "Jan Kowalski",
      photoUrl: '../assets/images/examplePicture.jpg',
      age: 22,
      description: "VIP",
      address: {
        street: "Złota",
        houseNumber: 13,
        city: "Warszawa"
      },
      type: CustomerType.Premium,
      categories: [
        "zagraniczny",
        "mikroprzedsiębiorstwo",
        "duży obrót"
      ]
    },
    {
      name: "Janina Kalinowska",
      photoUrl: '../assets/images/examplePicture.jpg',
      age: 77,
      description: "dobry klient",
      address: {
        street: "Biała",
        houseNumber: 1,
        city: "Biała Podlaska"
      },
      type: CustomerType.Premium,
      categories: [
        "osoba prywatna"
      ]
    },
    {
      name: "Basia Barbara",
      photoUrl: '../assets/images/examplePicture.jpg',
      age: 19,
      description: "co za człowiek",
      address: {
        street: "Garbowa",
        houseNumber: 55,
        city: "Kielce"
      },
      type: CustomerType.Standard,
      categories: [
        "mały sklep"
      ]
    },
    {
      name: "Kasia Katarzyna",
      photoUrl: '../assets/images/examplePicture.jpg',
      age: 36,
      description: "co za człowiek",
      address: {
        street: "Górzasta",
        houseNumber: 123,
        city: "Częstochowa"
      },
      type: CustomerType.VIP,
      categories: [
        "sieć handlowa"
      ]
    }
  ]

  customer: Customer = this.customers[0]

  nameColor: string = 'blue'
  isActive: boolean = true
  showPhoto: boolean = false

  CustomerType = CustomerType
  //powyższy zapis pozwala na uzycie CustomerType jako obiektu js dlatego też możemy go użyć w app.component.html w ngSwitch

  constructor() {
  }

  changeColor() {
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue'
  }
}
