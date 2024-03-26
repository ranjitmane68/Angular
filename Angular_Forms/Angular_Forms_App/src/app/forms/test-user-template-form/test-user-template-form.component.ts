import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-user-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './test-user-template-form.component.html',
  styleUrl: './test-user-template-form.component.scss',
})
export class TestUserTemplateFormComponent {
  @ViewChild('userform')
  userForm!: NgForm;

  userName!: string;
  age!: Number;
  userEmail: string = 'test@mail.com';

  onSubmit(form: NgForm) {
    console.log('template driven form is submitted');
    console.log(form);
    console.log(this.userForm);
  }
}
