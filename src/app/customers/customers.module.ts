import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CustomerAddComponent,
    CustomerDetailsComponent, //ten komponent jest uzywany tylko w CustomerBrowser dlatego go nie eksportujemy
    CustomerBrowserComponent,
  ],
  providers: [
    CustomerService
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent //exportujemy tylko te komponenty które będa używane poza tym modułem
  ]
})
export class CustomersModule { }
