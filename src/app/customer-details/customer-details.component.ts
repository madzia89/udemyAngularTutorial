import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {

  @Input() customer: Customer
  @Output() shift = new EventEmitter<string>()

  nameColor: string = 'blue'
  isActive: boolean = true
  showPhoto: boolean = false

  //output pozwala na bindowanie danych wzwyż tj do wyższego komponentu 
   
  CustomerType = CustomerType

  constructor() { }

  ngOnInit() {
    //ta metoda dodawana jest automatycznie przy tworzeniu komponentu
    //jest wywoływana podczas inicjalizacji komponentu (podczas załadowania)
    console.log('init')
    //componentDidMount
  }

  ngOnDestroy(){
    console.log('exit')
    //componentDidUnmount
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
