import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddDeactivateGuard implements CanDeactivate<CustomerAddComponent> {
  //w nawiasach <> podajemy strażnikowi infromację dla jakiego komponentu a byc uruchamiany 

  canDeactivate(component: CustomerAddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
   boolean | Observable<boolean> | Promise<boolean>{
    return !(component.name || component.age || component.type) 
    //jeśli te pola w komponencie będą puste, 
    //wówczas możliwe jest przejście do innego komponentu, 
    //jeżeli jednak są wypełnione canDeactivate zabroni iść dalej 
    //aby przypadkiem wpisywane dane nie zostały utracone

    // return true/false; //w zależności od tego czy chcemy pozwolić na deaktywację czy nie
  }

  constructor() { }
}
