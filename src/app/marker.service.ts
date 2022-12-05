import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  private marker: any[] = []

  constructor(private api: ApiServiceService,
              private popupService: PopupService) { }

  markers(map) {
    this.api.get().subscribe({
      next:(data)=>{
        for(let i=0; i<data.length; i++){
          this.marker.push(L.marker([Number(data[i].data.latitude), Number(data[i].data.longitude)]).addTo(map));
          this.marker[i].bindPopup(this.popupService.popup(data[i].data));
        }
      }
    })
  }


}
