import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit {

  private users : string[];
  private userSerivce: UserService;

  constructor(userService: UserService) {
    this.userSerivce = userService;
  }
  
ngOnInit() {
  this.users = this.userSerivce.inactiveUsers;
}

}
