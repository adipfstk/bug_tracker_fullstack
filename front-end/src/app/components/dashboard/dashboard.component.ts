import { Component } from '@angular/core';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  buttonsData!:Map<string, string>;

  chartData:any[] = [
    {
      title: 'Changing Chart',
      type: ChartType.PieChart,
      data: [
        ['Copper', 8.94],
        ['Silver', 10.49],
        ['Gold', 19.3],
        ['Platinum', 21.45]
      ],
      columns: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true
        }
      }
    },
    {
      title: 'Changing Chart',
      type: ChartType.PieChart,
      data: [
        ['Copper', 8.94],
        ['Silver', 10.49],
        ['Gold', 19.3],
        ['Platinum', 21.45]
      ],
      columns: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true
        }
      }
    },
    {
      title: 'Changing Chart',
      type: ChartType.PieChart,
      data: [
        ['Copper', 8.94],
        ['Silver', 10.49],
        ['Gold', 19.3],
        ['Platinum', 21.45]
      ],
      columns: ['Element', 'Density'],
      options: {
        animation: {
          duration: 250,
          easing: 'ease-in-out',
          startup: true
        }
      }
    },
  ]
  statsData!:any;
  constructor() {
    this.buttonsData = new Map<string, string>([
      ['desktop_windows', 'Dashboard'],
      ['article', 'Tickets'],
      ['admin_panel_settings', "Administration"]
    ]);

    this.statsData =  [
      {
        title: "Da"
      }
    ]
  }
}
