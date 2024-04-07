import {Component, Input, OnInit} from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-dash-stats',
  templateUrl: './dash-stats.component.html',
  styleUrl: './dash-stats.component.css'
})
export class DashStatsComponent implements OnInit {

  @Input()
  stat!: any;
  ngOnInit(): void {

  }

}
