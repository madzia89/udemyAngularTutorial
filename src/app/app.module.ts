import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Customer } from '../../TsSandbox/customer';

@NgModule({
  declarations: [
    AppComponent,
    Customer
  ],
  imports: [
    BrowserModule,
    Customer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
