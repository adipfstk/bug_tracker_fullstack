import { Component, Input, OnInit } from '@angular/core';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';

@Component({
  selector: 'app-dash-stats',
  templateUrl: './dash-stats.component.html',
  styleUrl: './dash-stats.component.css'
})
export class DashStatsComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.stat)
  }
  @Input()
  stat!:any;


}
