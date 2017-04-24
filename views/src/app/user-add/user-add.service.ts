import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserAddService {

  constructor(private http: Http) { }

  addUser(firstname: String, lastname: String, email: String, sex: String, birthday: String) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({ 'firstname': firstname, 'lastname': lastname, 'email': email, 'sex': sex, 'birthday': birthday });

    return this.http.post('/api/user', body, options).map(res => res.json());
  }

}
