import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IseventexistGuard implements CanActivate {
  constructor(
    private _service : EventService,
    private _router : Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let index = route.params['id']
      if(this._service.events[index])
        return true;
      this._router.navigate(['/fourofour'])
      return false;
  }

}
