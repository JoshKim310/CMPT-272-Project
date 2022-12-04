import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  post(report: any) {
    return this.http.post<any>("https://272.selfip.net/apps/pFRJTg1tmV/collections/kXf3ecnk1llqfIHIHCdZ567vtHGRtc/documents/", {"key":report.id, "data":report});
  }

  get() {
    return this.http.get<any>("https://272.selfip.net/apps/pFRJTg1tmV/collections/kXf3ecnk1llqfIHIHCdZ567vtHGRtc/documents/");
  }

  delete(id: string) {
    return this.http.delete<any>("https://272.selfip.net/apps/pFRJTg1tmV/collections/kXf3ecnk1llqfIHIHCdZ567vtHGRtc/documents/"+id);
  }
}
