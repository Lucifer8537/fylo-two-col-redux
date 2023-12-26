import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  contactList: { icon: string; value: string }[] = [
    { icon: '../../assets/icon-phone.svg', value: 'Phone: +1-543-123-4567' },
    { icon: '../../assets/icon-email.svg', value: 'example@fylo.com' },
  ];
  option1: string[] = ['About Us', 'Jobs', 'Press', 'Blog'];
  option2: string[] = ['Contact Us', 'Terms', 'Privacy'];
}
