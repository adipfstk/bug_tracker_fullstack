import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dash-button',
  templateUrl: './dash-button.component.html',
  styleUrl: './dash-button.component.css'
})
export class DashButtonComponent {
  @Input()
  buttonData!:[string, string];
}
