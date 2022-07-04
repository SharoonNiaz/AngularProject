import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/Models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit, OnDestroy {

   user = {id:0 , name : '' ,email:''};

  constructor(private route : ActivatedRoute , private paramSubscription : Subscription, private userService : UsersService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let selectedUser = this.userService.getUserById(id);

    this.user.name = this.route.snapshot.params['id'];
    this.user.name = this.route.snapshot.params['name'];

    this.paramSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.user = { id:params['id'], name:params['name'], email : ''}
      }
    )
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  

}
