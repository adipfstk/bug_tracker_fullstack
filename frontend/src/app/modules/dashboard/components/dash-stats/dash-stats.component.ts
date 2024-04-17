import { Component, Input } from '@angular/core';

@Component({
  selector: 'dash-stats',
  templateUrl: './dash-stats.component.html',
  styleUrl: './dash-stats.component.css',
})
export class DashStatsComponent  {
  @Input()
  stat!: any;

}
