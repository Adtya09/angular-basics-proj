import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  GIT_API_URL: string = 'https://api.github.com/users/';
  response: any;
  constructor(private http: HttpClient) {}
  callGitHubApi(userName: string): any {
    let obs = this.http.get(this.GIT_API_URL + userName);
    obs.subscribe((resp) => {
      this.response = resp;
      console.log('Rest call for ' + userName + ' Response -> ' + resp);
      return this.response;
    });
  }
}
