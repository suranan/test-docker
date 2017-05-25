import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Invoice } from './model/invoice.model';

@Injectable()
export class BillManagementService {

  constructor(private http: Http) { }

  ListAllBill(): Observable< Invoice[] > {
    return this.http.get('/api/invoice').map((response: Response) => response.json());
  }

}