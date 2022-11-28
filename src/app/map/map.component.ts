import { AfterViewChecked, Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewChecked {

  private map;

  constructor() { }

  ngAfterViewChecked(): void {
    this.map = L.map('map').setView([49.24, -123.12], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(this.map);
    
  }

}
