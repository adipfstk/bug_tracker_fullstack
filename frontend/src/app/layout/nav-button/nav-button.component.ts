import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dash-button',
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.css'
})
export class NavButtonComponent {
  @Input()
  buttonData!: [string, string];
}
