import { Component, OnInit } from '@angular/core';
import { MipapiService } from '../../services/mipapi.service';

export interface Intro {
	time: string,
	date: string,
	nazwa: string,
	contentType: string
}

@Component({
  selector: 'app-mipapi',
  templateUrl: './mipapi.component.html',
  styleUrls: ['./mipapi.component.css']
})
export class MipapiComponent implements OnInit {
  
  introduction;
  introText: string;

  constructor(private mipapiService: MipapiService) { 
  	 // this.introduction = {time: '0', date: '101010'}
  }

  ngOnInit() {
  	this.showIntroduction();
  	// console.warn('Teraz mamy:'+ this.introduction.date);
  }

  showIntroduction() {
  	this.mipapiService.getIntroduction()
  		.subscribe((data: Intro) => this.introText = JSON.stringify(data));
  }

}
