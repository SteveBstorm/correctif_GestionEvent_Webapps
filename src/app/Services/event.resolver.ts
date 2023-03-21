import { EventService } from './event.service';
import { IEvent } from './../Models/ievent';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<IEvent> {
  constructor(private _service : EventService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IEvent {
    let index = route.params['id']
    return this._service.getByIndex(index)
  }
}
