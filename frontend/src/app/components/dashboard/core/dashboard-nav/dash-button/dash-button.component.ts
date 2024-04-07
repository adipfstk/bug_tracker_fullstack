import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-button',
  templateUrl: './dash-button.component.html',
  styleUrl: './dash-button.component.css'
})
export class DashButtonComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.buttonData)
  }
  @Input()
  buttonData!:[string, string];


}
