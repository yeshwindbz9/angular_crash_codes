import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Jax'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Ajax'
    },
    {
      id: 4,
      name: 'Hanna'
    }
  ];
}
