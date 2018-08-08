import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' //potrzebne do obsługi komunikacji z serwerem
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { HighlightDirective } from './highlight.directive'
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service'
import { Config, CONFIG } from './model'
import { MessageService } from './message.service';
import { CustomerAddComponent } from './customer-add/customer-add.component'
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { CapitalizePipe } from './capitalize.pipe'
import { ContractsModule } from './contracts/contracts.module';



const config: Config = {
  customerLimit: 10,
  apiUrl: 'http://localhost:13378'
}

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    CapitalizePipe, //dodajemy tutaj wszystkie komponenty które dodajemy do aplikacji
  ],
  imports: [
    BrowserModule, //tutaj dodajemy moduły angularowe, które chcemy użyć w aplikacji
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ContractsModule
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
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true}
    //http_interceptors jest to token zdefiniowany w samym angularze
    //dodajemy klasę którą chcemy użyć
    //multi jest potrzbene ponieważ HTTp_INTERCEPTORS może miec wiele usług,
    // a my je wszystkie chcemy obsłużyć dla tego samego tokena
  ], //services, które dodamy do naszej aplikacji
  bootstrap: [AppComponent] //główne komponenty które zostaną zaaplikowane w index.html
})
export class AppModule { }
