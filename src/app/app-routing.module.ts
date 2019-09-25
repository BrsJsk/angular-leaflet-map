import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeafletMapComponent} from './leaflet-map/leaflet-map.component';
import {SomeOtherPageComponent} from './some-other-page/some-other-page.component';

const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'map' },
   { path: 'map', component: LeafletMapComponent },
   { path: 'other', component: SomeOtherPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}