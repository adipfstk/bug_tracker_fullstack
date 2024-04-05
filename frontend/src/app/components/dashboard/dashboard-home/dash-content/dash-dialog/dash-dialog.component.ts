import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user.service';
import { UserDto } from '../../../../../models/userDTO.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-dialog',
  templateUrl: './dash-dialog.component.html',
  styleUrl: './dash-dialog.component.css',
})
export class DashDialogComponent implements OnInit {
  users!: UserDto[];

  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    usernames: new FormControl(''),
  });

  constructor(
    private _userService: UserService,
    private _projectService: ProjectService, 
    private _router : Router
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
