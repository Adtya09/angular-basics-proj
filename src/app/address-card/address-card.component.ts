import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  user: any;
  isExpanded: boolean = false;
  status: string = 'Expand';
  constructor() {
    this.user = {
      name: 'Aditya Jha',
      title: 'Software Engineer',
      email: 'athemastermind9@gmail.com',
      phone: ['8146953096', '7355700544'],
    };
  }

  ngOnInit() {}

  onButtonTriggered() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.status = 'Collapse';
    } else {
      this.status = 'Expand';
    }
  }
}
