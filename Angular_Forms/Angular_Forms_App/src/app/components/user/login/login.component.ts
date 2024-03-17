import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  genders = ['male', 'female'];
  loginForm!: FormGroup;

  forbiddenUserNames = ['Chris', 'Anna'];

  //loginFormName!: FormGroupName;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forBiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.loginForm.get('hobbies')).push(control);
  }

  onSubmit() {
    console.log(this.loginForm);
    console.log('login form onSubmit is called');
  }

  forBiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForBidden: true };
    } else return null as any;
  }

  // forBiddenNamesAsync(control: FormControl) : Promise<any> | Observable<any> {

  //   const Promise = new Promise<any>((resolve, reject)) => {
  //     setTimeout(()=> {
  //       if(control.value === 'test@test.com')
  //       {
  //         resolve({'emailIsForbidden' : true});
  //       }
  //       else
  //       {
  //         resolve(null);
  //       }
  //      }, 1500)
  //   }

  }

