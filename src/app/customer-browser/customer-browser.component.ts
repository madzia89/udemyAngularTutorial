import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CustomerType, Customer } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild('details') detailsComponent: CustomerDetailsComponent
  //w środku viewChild jest nazwa zmiennej szablonowej do której chcemy sie odnieść
  //detailsComponent jest typu CustomerDetailsComponent co poniżej w funkcji changeColor()
  //daje nam dostęp do rzeczy w komponencie CustomerDetailsComponent

  customers: Customer[] = [
    //powyzszy dekorator input mówi, 
    //że do tego pola będzie można wiązać
    // w szablonie za pomocą property bindingu
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

  customer: Customer = null

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    this.detailsComponent.changeColor()
  }

  onShift(direction: string) {
    const i = this.customers.indexOf(this.customer)
    if (i > 0 && direction === 'left') {
      this.customer = this.customers[i - 1]
    } else if (direction === "right" && i < this.customers.length - 1) {
      this.customer = this.customers[i + 1]
    }
  }

}
