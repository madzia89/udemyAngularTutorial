import { Injectable, Inject } from '@angular/core';
import { Customer, CustomerType, Config, CONFIG} from './model';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   constructor(
     private httpClient: HttpClient,
     @Inject(CONFIG) private config: Config
    ) { }

  getCustomers(){
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
    .pipe(map(customers => customers.slice(0, this.config.customerLimit)))
    //poza samym importem mapa, 
    //pipe jest potrzebny aby map zadziałał (dzieje się tak od wprowadzenia angular6)
  }
}
