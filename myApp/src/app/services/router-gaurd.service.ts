import { Injectable } from '@angular/core';
import { HardcodedServiceService } from './hardcoded-service.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGaurdService implements CanActivate {

  constructor(private hardcodedservices:HardcodedServiceService) {
   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
   {  
     if(this.hardcodedservices.isUserLoggedIn)
      return true;

      return false;
   }
}
