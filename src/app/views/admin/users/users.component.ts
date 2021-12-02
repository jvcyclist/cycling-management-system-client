import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AdminUserService } from 'src/app/services/admin-user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  columnsToDisplay = ['id', 'username', 'accountStatus', 'details'];

  constructor(private userService: AdminUserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users)


  }

}
