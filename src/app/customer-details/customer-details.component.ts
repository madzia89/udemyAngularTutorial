import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer
  @Output() shift = new EventEmitter<string>()

  nameColor: string = 'blue'
  isActive: boolean = true
  showPhoto: boolean = false

  //output pozwala na bindowanie danych wzwyż tj do wyższego komponentu 
   
  CustomerType = CustomerType

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue'
  }

  left(){
    this.shift.emit('left')
  }

  right(){
    this.shift.emit('right')
  }

}
