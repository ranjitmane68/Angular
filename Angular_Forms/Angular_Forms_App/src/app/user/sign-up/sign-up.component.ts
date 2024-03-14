import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @ViewChild('f')
  signupForm: NgForm | undefined;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  defaultGender = 'female';
  submitted = false;
  title = 'Angular_Forms_App';

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  suggestUserName() {
    console.log('suggestUserName is called');
    const suggestedName = 'SuperUser';
    // this.signupForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    this.signupForm?.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('onSubmit is called', form);
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.signupForm?.value.userData.username;
    this.user.email = this.signupForm?.value.userData.email;
    this.user.secretQuestion = this.signupForm?.value.secret;
    this.user.answer = this.signupForm?.value.questionAnswer;
    this.user.gender = this.signupForm?.value.gender;
    console.log(this.signupForm);

    //reset the form
    this.signupForm?.reset();
  }
}
