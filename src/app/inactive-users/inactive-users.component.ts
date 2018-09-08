import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit {

  private users : string[];
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }
  
  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

}
