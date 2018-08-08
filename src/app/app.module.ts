import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' //potrzebne do obsługi komunikacji z serwerem
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { HighlightDirective } from './customers/highlight.directive'
import { CustomerService } from './customers/customer.service'
import { Config, CONFIG } from './model'
import { MessageService } from './message.service';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { CapitalizePipe } from './customers/capitalize.pipe'
import { ContractsModule } from './contracts/contracts.module';
import { CustomersModule } from './customers/customers.module';



const config: Config = {
  customerLimit: 10,
  apiUrl: 'http://localhost:13378'
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, //tutaj dodajemy moduły angularowe, które chcemy użyć w aplikacji
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ContractsModule,
    CustomersModule
  ],
  providers: [
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
