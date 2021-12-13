import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls: ['./rest-call.component.css'],
})
export class RestCallComponent implements OnInit {
  userName: string = '';
  resp: any;
  responseGenerated: boolean = false;
  constructor(private restTemplate: RestService) {}
  searchUser() {
    this.resp = null;
    console.log('Request for ' + this.userName);
    this.resp = this.restTemplate.callGitHubApi(this.userName);
    console.log(this.resp);
    if (this.resp != null) {
      this.responseGenerated = true;
    }
  }

  ngOnInit() {}
}
