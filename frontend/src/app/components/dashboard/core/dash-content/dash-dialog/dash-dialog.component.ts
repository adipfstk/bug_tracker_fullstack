import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../../../../services/user.service";
import {ProjectService} from "../../../../../services/project.service";




@Component({
  selector: 'app-dash-dialog',
  templateUrl: './dash-dialog.component.html',
  styleUrl: './dash-dialog.component.css',
})
export class DashDialogComponent implements OnInit {
  users!: any;

  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    usernames: new FormControl(''),
  });

  constructor(
    private _userService: UserService,
    private _projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    this._userService.getBenchUsers().subscribe((result) => {
      this.users = result;
    });
  }

  foo() {
    this._projectService.postNewProject(this.formData.value).subscribe(_=>
      this._projectService
      .refreshData$.next(true)
    );
  }
}
