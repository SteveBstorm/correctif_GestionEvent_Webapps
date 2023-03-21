import { EventService } from './../../Services/event.service';
import { IEvent } from './../../Models/ievent';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  events! : IEvent[]

  constructor(private _eventService : EventService) {
  }

  ngOnInit(){
    this.events = this._eventService.getAll()
  }
}
