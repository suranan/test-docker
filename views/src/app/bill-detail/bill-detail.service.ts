import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Invoice } from './model/invoice.model';

@Injectable()
export class BillDetailService {

  constructor(private http: Http) { }

  GetInvoice(id):Observable< Invoice> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({ 'id': id });

    return this.http.post('/api/invoice', body, options).map((response: Response) => response.json());

  }

}
