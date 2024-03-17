import { Component } from '@angular/core';
import { IUserCredentials } from '../../models/IUserCredentials';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-sign-in.component.html',
  styleUrl: './user-sign-in.component.scss'
})
export class UserSignInComponent {
  crendentials: IUserCredentials = {email: '', password:''};

  constructor(private userService: UserService) {
    console.log("userService is called");
  }
  signIn() {

  }
}
