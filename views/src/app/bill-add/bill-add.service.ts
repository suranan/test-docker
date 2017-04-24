import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BillAddService {

  constructor(private http: Http) { }

  getUserList(){
    return this.http.get('/api/user').map(res => res.json());
  }

  addBill(inv_no: String, user_code: String, date: String , detail) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({ 'invoice_code': inv_no, 'user_code': user_code, 'date': date, 'detail': detail});

    return this.http.post('/api/invoice/add', body, options).map(res => res.json());
  }

}
