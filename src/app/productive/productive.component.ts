import { Component } from '@angular/core';

@Component({
  selector: 'app-productive',
  templateUrl: './productive.component.html',
  styleUrls: ['./productive.component.css'],
})
export class ProductiveComponent {
  title = 'Stay productive, wherever you are';
  para: string[] = [
    'Never let location be an issue then accessing your files. Fylo has you covered for all of your file storage needs.',
    'Securely share files and folders with friends, family and colleague for live collaboration. No email attachments required!',
  ];
  highlight = 'See how Fylo works';
  commentContext =
    'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.';
  commentName = 'Kyle Burton';
  commentDesignation = 'Founder & CEO, Huddle';
}
