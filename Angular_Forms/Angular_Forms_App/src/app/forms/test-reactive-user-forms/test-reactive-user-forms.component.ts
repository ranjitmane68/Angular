import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-test-reactive-user-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-reactive-user-forms.component.html',
  styleUrl: './test-reactive-user-forms.component.scss',
})
export class TestReactiveUserFormsComponent implements OnInit {
  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      age: new FormControl(0),
    });
  }
  userForm!: FormGroup;

  onSubmit() {
    console.log('submit is called');
    console.log(this.userForm);
  }
}
