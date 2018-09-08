import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  
  private users : string[] ;
  private userService: UserService;
  
  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }


  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
}
