import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { map } from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements AfterViewInit {
  map: any;

  constructor() { }

  ngAfterViewInit() {
   this.map = map('map').setView([38.914764662971436, -97.01461108304595], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

}