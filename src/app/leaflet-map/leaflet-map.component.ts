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

  markerLocations = [
    {
      lat: 38.914764662971436,
      lng: -97.01461108304595
    },
     {
       lat: 2,
       lng: 2
     }
  ]

  constructor() { }

  ngAfterViewInit() {
   this.map = map('map').setView([38.914764662971436, -97.01461108304595], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    setTimeout(() => {
      this.addMarkers()
    }, 1000)
  }

  addMarkers() {
    const icon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png',

        iconSize: [41, 41], // size of the icon
        shadowSize: [41, 41], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

    this.markerLocations.forEach(t => {
      L.marker([t.lat, t.lng], { icon })
          .addTo(this.map)
          .bindPopup('Hi!!');
    })
  }

}