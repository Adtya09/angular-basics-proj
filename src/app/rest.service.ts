import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  GIT_API_URL: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}
  callGitHubApi(userName: string) {
    return this.http.get(this.GIT_API_URL + userName);
  }
}
