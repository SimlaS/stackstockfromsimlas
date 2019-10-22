import { Component, OnInit } from '@angular/core';
import { DrawingService } from '../../services/drawing.service';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {

  drawingJsonData: string;
  title : string;
  tresc : Array<any>;

  constructor(private drawingService: DrawingService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [];

  ngOnInit() {
  	this.showDrawingData();
  }

  showDrawingData() {
  	this.drawingService.getDrawingData()
  		.subscribe(data => { 
        this.drawingJsonData = JSON.stringify(data);
        // this.title = data.map(function(el) {this.title = el.success.tytul});
        this.title = data['success']['tytul'];
        let tresc = data['success']['tresc'];
        let ls = [], vs = [];
        tresc.map(function(el){
          console.log(el.wartoscX, el.wartoscY);
          ls.push(el.wartoscX);
          vs.push(el.wartoscY);
        });
        this.barChartLabels = ls;
        this.barChartData = [
            {data: vs}
          ];
          console.log(this.barChartData);
        });
  }

}
