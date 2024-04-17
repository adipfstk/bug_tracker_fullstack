import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashContentComponent} from "./components/dash-content/dash-content.component";
import {DashStatsComponent} from "./components/dash-stats/dash-stats.component";
import {DashDialogComponent} from "./components/dash-dialog/dash-dialog.component";
import {DashTableComponent} from "./components/dash-table/dash-table.component";
import {SharedModule} from "../../shared";
import {HomeComponent} from "./pages/home/home.component";
import {ProjectComponent} from "./pages/project/project.component";
import {TicketsComponent} from "./pages/tickets/tickets.component";
@NgModule({
  declarations: [
    DashContentComponent,
    DashStatsComponent,
    DashDialogComponent,
    DashTableComponent,
    HomeComponent,
    ProjectComponent,
    TicketsComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {
}
