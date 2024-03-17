import { Routes } from '@angular/router';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: UserSignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
