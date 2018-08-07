import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CustomerType, Customer } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild('details') detailsComponent: CustomerDetailsComponent
  
  customers: Customer[]
  customer: Customer = null

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.refresh()
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer).subscribe(
      ()=> {
        this.messageService.success("klient został usunięty")
        this.refresh()
      },
      error => {
        console.log(error)
        this.messageService.error('błąd w połączeniu z serwerem')
      }
    )
    
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

  private refresh(){
    this.customerService.getCustomers().subscribe(response =>{
      this.customers = response
      this.customer = this.customers[0]
    })
  }

}
