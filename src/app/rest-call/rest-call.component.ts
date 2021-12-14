import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls: ['./rest-call.component.css'],
})
export class RestCallComponent implements OnInit {
  userName: string = '';
  response: any;
  responseGenerated: boolean = false;

  constructor(private restTemplate: RestService) {}
  searchUser() {
    console.log('Request for ' + this.userName);
    this.restTemplate.callGitHubApi(this.userName).subscribe((resp) => {
      this.response = resp;
      console.log('Rest call for ' + this.userName + ' Response -> ' + resp);
      if (this.response != null) {
        this.responseGenerated = true;
      }
    });
  }

  ngOnInit() {}
}
