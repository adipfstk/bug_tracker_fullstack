import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChartType} from 'angular-google-charts';

@Component({
  selector: 'dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chartData: any;
  constructor(public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.chartData = Array.from({length: 3}, () =>
      this.getDefaultChartData()
    );
  }
  private getDefaultChartData(): any {
    return {
      title: 'Changing Chart',
      type: ChartType.PieChart,
      data: [
        ['Copper', 8.94],
        ['Silver', 10.49],
        ['Gold', 19.3],
        ['Platinum', 21.45],
      ],
      columns: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true,
        },
      },
    };
  }
}
