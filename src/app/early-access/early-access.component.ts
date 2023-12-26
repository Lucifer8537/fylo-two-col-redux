import { Component } from '@angular/core';

@Component({
  selector: 'app-early-access',
  templateUrl: './early-access.component.html',
  styleUrls: ['./early-access.component.css'],
})
export class EarlyAccessComponent {
  title = 'Get early access today';
  context =
    'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.';
  placeholder = 'email@example.com';
  btnTitle = 'Get Started For Free';
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
