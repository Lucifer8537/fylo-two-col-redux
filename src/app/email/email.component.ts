import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent {
  title = 'All your files in one secure location, accessible anywhere.';
  context =
    'Fylo stores your most important files in one secure location. Access them whenever you need, share and collaborate with friends, family, and co-workers.';
  intputPlaceHolder = 'Enter your email...';
  btnTitle = 'Get Started';
  errMsg = 'Please check your email';
  email!: string;
  showErr!: boolean;
  isValidEmail = (email: string): boolean => {
    const emailPattern =
      /^[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  onClickSave = () => {
    this.showErr = !this.isValidEmail(this.email);
  };
}
