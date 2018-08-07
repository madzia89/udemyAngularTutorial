import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http' //potrzebne do obsługi komunikacji z serwerem
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { HighlightDirective } from './highlight.directive'
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service'
import { Config, CONFIG } from './model'
import { MessageService } from './message.service'



const config: Config = {
  customerLimit: 2,
  apiUrl: 'http://localhost:13378'
}

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent, //dodajemy tutaj wszystkie komponenty które dodajemy do aplikacji
  ],
  imports: [
    BrowserModule, //tutaj dodajemy moduły angularowe, które chcemy użyć w aplikacji
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    //useClass mówi, że mamy użyć klasy
    //możemy tutaj podać nie tylko nazwę klasy, ale też 
    //useValue aby użyć już zainicjowanej instancji
    //useFactory żeby podać funkcję która będzie tworzyła nam instancję,
    // co do zasady ta para poniżej mówi nam czego użyć gdy ktoś zapyta o dany symbol.
    // CustomerService ===> to samo co niżej
    {provide: CustomerService, useClass: CustomerService},
    {provide: CONFIG, useValue: config},
    MessageService
  ], //services, które dodamy do naszej aplikacji
  bootstrap: [AppComponent] //główne komponenty które zostaną zaaplikowane w index.html
})
export class AppModule { }
