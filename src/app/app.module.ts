import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent, //dodajemy tutaj wszystkie komponenty które dodajemy do aplikacji
  ],
  imports: [
    BrowserModule, //tutaj dodajemy moduły angularowe, które chcemy użyć w aplikacji
    FormsModule
  ],
  providers: [], //services, które dodamy do naszej aplikacji
  bootstrap: [AppComponent] //główne komponenty które zostaną zaaplikowane w index.html
})
export class AppModule { }
