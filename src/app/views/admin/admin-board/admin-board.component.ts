import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AdminUserService } from 'src/app/services/admin-user.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  users: User[] = []

  constructor(private userService: AdminUserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users)

  }

}
