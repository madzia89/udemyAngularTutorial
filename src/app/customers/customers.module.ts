import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CapitalizePipe } from './capitalize.pipe';
import { HighlightDirective } from './highlight.directive';
import { CustomerService } from './customer.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CustomerAddComponent,
    CustomerDetailsComponent, //ten komponent jest uzywany tylko w CustomerBrowser dlatego go nie eksportujemy
    CustomerBrowserComponent,
    CapitalizePipe,//ten komponent jest uzywany tylko w CustomerBrowser dlatego go nie eksportujemy
    HighlightDirective//ten komponent jest uzywany tylko w CustomerBrowser dlatego go nie eksportujemy
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