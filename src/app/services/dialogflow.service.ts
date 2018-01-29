import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DialogflowService {
  public onMessageAdded: Subject<null> = new Subject();
  private baseURL = environment.chatbotUrl;
  private token: string = environment.chatbotToken;

  constructor(private http: Http) { }

  public getResponse(query: string) {
    const data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.baseURL}`, data, { headers: this.getHeaders() })
      .map(res => {
        return res.json();
      });
  }

  public getHeaders() {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
