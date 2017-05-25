import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { User } from './user-management.model';

@Injectable()
export class UserManagementService {

  constructor(private http: Http) { }

  ListAllUser(): Observable< User[] > {

    return this.http.get('/api/user').map((response: Response) => response.json());

  }

  selectUser(id) {

       return this.http
      .get('/api/user/'+id, )
      .map((res: Response) => res.json());

  }

  saveUser(id: String, firstname: String, lastname: String, email: String, sex: String, birthday: String) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({ 'id': id, 'firstname': firstname, 'lastname': lastname, 'email': email, 'sex': sex, 'birthday': birthday });
    return this.http.post('/api/user/update', body, options).map(res => res.json());
  }


  deleteUser(id: String) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({ 'id': id });

    return this.http.post('/api/user/delete', body, options).map(res => res.json());
  }



}
