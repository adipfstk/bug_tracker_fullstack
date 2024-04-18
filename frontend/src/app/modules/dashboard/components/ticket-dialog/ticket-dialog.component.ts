import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrl: './ticket-dialog.component.css',
})
export class TicketDialogComponent {
  users: any[] = [
    {
      username: 'Asa',
    },
    {
      username: 'Asa',
    },
    {
      username: 'Asa',
    },
  ];

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    assignedUsers: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
    priority: new FormControl(''),
  });

  selectableFields: string[] = ['type', 'priority', 'status']

  submitHandler() {
    console.log(this.formData.value)
  }

  getOptions(field: string): string[] {
    switch (field.toLowerCase()) {
      case 'type':
        return ['Bug', 'Feature', 'Improvement'];
      case 'priority':
        return ['Low', 'Medium', 'High'];
      case 'status':
        return ['Open', 'In Progress', 'Resolved'];
      default:
        return [];
    }
  }
  
}
