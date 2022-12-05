import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  popup(data: any): string {

    return ``+
    `<div>${ data.location }</div>` +
    `<div> pigs reported</div>`
  }

}
