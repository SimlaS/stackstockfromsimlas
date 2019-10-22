import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  url = 'http://mip/admin/api.php/drawings/sales';

  constructor(private http: HttpClient) { }

  getDrawingData() {
  	return this.http.get(this.url);
  }
}
