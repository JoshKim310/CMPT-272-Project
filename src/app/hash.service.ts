import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor(private http:HttpClient) { }

  get(data: any) {
    return this.http.get("https://api.hashify.net/hash/md5/hex?value=" + data);
  }

}
