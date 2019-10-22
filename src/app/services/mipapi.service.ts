import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intro } from '../components/mipapi/mipapi.component';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MipapiService {
  
  mipapiUrl = 'http://mip/admin/api.php';

  constructor(private http: HttpClient) { }

  getIntroduction() {
  	return this.http.get(this.mipapiUrl)
  		.pipe(
  			tap(
  				data => console.log(data),
  				error => console.error(error)
			)
		);
  }

}
