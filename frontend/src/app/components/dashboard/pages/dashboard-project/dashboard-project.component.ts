import { Component, inject } from '@angular/core';
import { DashDialogComponent } from '../../core/dash-content/dash-dialog/dash-dialog.component';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrl: './dashboard-project.component.css',
  providers: [
    {
      provide: 'SERVICE',
      useFactory: () => ({
        dialogReferencedComponent: DashDialogComponent,
        dataService: inject(ProjectService),
        title: 'Team'
      }),
    },
  ],
})

export class DashboardProjectComponent {
  

}
