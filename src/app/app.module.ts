import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, //dodajemy tutaj wszystkie komponenty które dodajemy do aplikacji
  ],
  imports: [
    BrowserModule, //tutaj dodajemy moduły angularowe, które chcemy użyć w aplikacji
  ],
  providers: [], //services, które dodamy do naszej aplikacji
  bootstrap: [AppComponent] //główne komponenty które zostaną zaaplikowane w index.html
})
export class AppModule { }
