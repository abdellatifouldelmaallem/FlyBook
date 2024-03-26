import { Component } from '@angular/core';
import { User } from '../common/interface/userProp';
import { Users } from '../common/data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  Users: User[] = Users;
}
