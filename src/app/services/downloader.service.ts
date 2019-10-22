import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(private http: HttpClient) { }

  getTextFile(filename: string) {
  	return this.http.get(filename, {responseType: 'text'});
  }
}
