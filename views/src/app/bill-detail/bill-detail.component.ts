import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Invoice } from './model/invoice.model';
import { BillDetailService } from './bill-detail.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  inv_no: String;
  user_code: String;
  date: String;
  products = [];

  constructor(private route: ActivatedRoute, private router: Router, private billDetailService: BillDetailService) { }

  ngOnInit() {

    this.billDetailService.GetInvoice((this.route.snapshot.params['id'])).subscribe(res => {

      this.inv_no = res.invoice_code;
      this.user_code = res.user_code.firstname + ' ' + res.user_code.lastname;
      this.date = res.date;
      this.products = res.detail;
    });
  }

}
