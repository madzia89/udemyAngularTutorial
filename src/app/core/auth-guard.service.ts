import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
      console.log(state.url)
      return false
      //false sprawia że będący pod ochroną strażnika komponent nie będzie wyświetlony bez uprawnień
    // throw new Error("Method not implemented.")
  }
}
