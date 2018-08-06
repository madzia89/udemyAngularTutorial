import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges, SimpleChanges {

  @Input() customer: Customer
  @Output() shift = new EventEmitter<string>()

  nameColor: string = 'blue'
  isActive: boolean = true
  showPhoto: boolean = false
  counter: number = 0
  counterHandler: number

  CustomerType = CustomerType

  constructor() { }

  ngOnInit() {
    console.log('init')
    // this.counterHandler = setInterval(()=>{this.counter++}, 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.customer.firstChange) {
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`)
    }
    //ngOnChanges daje możliwość odniesieia się do tego co działo się przed zmianą i co się dzieje teraz. 
    //if na początku pozwala uniknąć błędu, który pojawiłby się gdybyśmy chcieli uzyskać dane z poprzedniej wartości gdy nią nie dysponujemy
  } 
  ngOnDestroy() {
    console.log('exit')
    // clearInterval(this.counterHandler)
  }

  changeColor() {
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue'
  }

  left() {
    this.shift.emit('left')
  }

  right() {
    this.shift.emit('right')
  }

}
