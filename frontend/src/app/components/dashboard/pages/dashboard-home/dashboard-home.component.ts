import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartType } from 'angular-google-charts';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
})
export class DashboardHomeComponent {
  chartData: any;

  constructor(public dialog: MatDialog, public projectService: ProjectService) {
    this.chartData = Array.from({ length: 3 }, () =>
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
