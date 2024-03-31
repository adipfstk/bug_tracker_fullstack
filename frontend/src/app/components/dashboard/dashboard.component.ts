import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

enum UserRoles {
  USER,
  DEVELOPER,
  TESTER,
  ADMIN
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  buttonOptions$!: Observable<Map<string, string>>;
  chartData: any[];

  constructor(private _dataService: DataService) {
    this.chartData = Array.from({ length: 3 }, () => this.getDefaultChartData());
  }

  ngOnInit(): void {
    const userRole = UserRoles.USER;
    this.buttonOptions$ = this._dataService.data$.pipe(
      map(next => {
        if (next.roles[userRole].authority === UserRoles[userRole]) {
          return new Map<string, string>([
            ['desktop_windows', 'Dashboard'],
            ['article', 'Tickets'],
            ['admin_panel_settings', 'Administration']
          ]);
        }
        return new Map<string, string>();
      })
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
    };
  }
}
