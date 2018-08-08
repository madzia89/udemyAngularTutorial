import { NgModule } from '@angular/core';
import { MessageService } from './message.service';
import { Config, CONFIG } from '../model';
import { HTTP_INTERCEPTORS } from '../../../node_modules/@angular/common/http';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { NavbarComponent } from './navbar/navbar.component';


const config: Config = {
  customerLimit: 10,
  apiUrl: 'http://localhost:13378'
}

@NgModule({
  providers: [
    MessageService,
    { provide: CONFIG, useValue: config },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }
  ],
    //http_interceptors jest to token zdefiniowany w samym angularze
    //dodajemy klasę którą chcemy użyć
    //multi jest potrzbene ponieważ HTTp_INTERCEPTORS może miec wiele usług,
    // a my je wszystkie chcemy obsłużyć dla tego samego, tokena
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
