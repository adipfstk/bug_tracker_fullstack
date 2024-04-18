import {Component, OnInit} from '@angular/core';
import {ChartType} from 'angular-google-charts';
import { DataService } from '../../../../core/services/data.service';
import { Project } from '../../../../core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chartData: any;
  projectData!: MatTableDataSource<Project[]>;
  constructor(private dataService: DataService ) {
  }

  ngOnInit(): void {
    this.chartData = Array.from({length: 3}, () =>
      this.getDefaultChartData()
    );

    this.dataService.projects().subscribe(projectData=> this.projectData=projectData);
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
