import { Component, OnInit } from '@angular/core';
import { DownloaderService } from '../../services/downloader.service';


@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent implements OnInit {

  filename = "../../assets/textfile.txt";
  text: string;

  constructor(private downloaderService: DownloaderService) { }

  ngOnInit() {
  	this.getTextData(this.filename);
  }

  getTextData(filename): void {
  	this.downloaderService.getTextFile(filename)
  		.subscribe(data => this.text = data);
  }
  reload(): void {
  	this.getTextData(this.filename);
  }

}
