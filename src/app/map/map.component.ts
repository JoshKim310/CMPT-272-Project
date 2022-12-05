import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ApiServiceService } from '../api-service.service';
import { icon, Marker } from 'leaflet';
import { MarkerService } from '../marker.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  public map;

  constructor(private api: ApiServiceService,
              private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    
    this.map = L.map('map').setView([49.24, -123.12], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    
    this.markerService.markers(this.map);
  }
}
