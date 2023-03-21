import { IEvent } from './../Models/ievent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events : IEvent[] = []

  constructor() { }

  getAll() : IEvent[] {
    return this.events
  }

  getByIndex(index : number) : IEvent {
    return this.events[index]
  }

  create(event : IEvent) {
    this.events.push(event)
  }
}
