import { Component, OnInit } from '@angular/core';
import { Users } from '../Models/users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : Users[] = [];

  constructor(private userService : UsersService) { }

  ngOnInit(): void {

    this.users = this.userService.getAllUsers();
    
  }

}
