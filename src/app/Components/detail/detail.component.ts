import { IEvent } from './../../Models/ievent';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  currentEvent! : IEvent

  constructor(private _ar : ActivatedRoute){}

  ngOnInit() {
    this.currentEvent = this._ar.snapshot.data['monEvent']
  }
}
