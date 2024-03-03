import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('f')
  signupForm: NgForm | undefined;

  title = 'Angular_Forms_App';

  // onSubmit(form: NgForm) {
  //   console.log('onSubmit is called', form);
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }
}
