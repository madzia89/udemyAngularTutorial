import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CustomerType, Customer } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild('details') detailsComponent: CustomerDetailsComponent
  
  customers: Customer[]
  customer: Customer = null

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers()
    this.customer = this.customer
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
