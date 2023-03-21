import { FourofourComponent } from './fourofour/fourofour.component';
import { IseventexistGuard } from './Services/iseventexist.guard';
import { EventResolver } from './Services/event.resolver';
import { DetailComponent } from './Components/detail/detail.component';
import { CreateEventComponent } from './Components/create-event/create-event.component';
import { ListComponent } from './Components/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'list', component : ListComponent},
  {path : 'create', component : CreateEventComponent},
  {path : 'detail/:id', canActivate : [IseventexistGuard], resolve : {monEvent : EventResolver}, component : DetailComponent},
  {path : 'fourofour', component : FourofourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
