import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AdminUserService } from 'src/app/services/admin-user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  editMode: boolean = false;  

  user: User = {}
  id!: number;
  constructor(private userService: AdminUserService,
              private route: ActivatedRoute,
              private locate: Location
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        this.userService.getUserById(this.id).subscribe(user => this.user = user)
      });
  }

  toggleEditMode(){
    this.editMode = !this.editMode
  }

  onDelete(){

  }

  onBack(){
    this.locate.back()
  } 

  onSave(){
    
  } 

}
