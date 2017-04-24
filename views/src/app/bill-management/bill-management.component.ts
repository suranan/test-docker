import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice, BillManagementService } from './index';

@Component({
  selector: 'app-bill-management',
  templateUrl: './bill-management.component.html',
  styleUrls: ['./bill-management.component.css']
})
export class BillManagementComponent implements OnInit {

  invoices: Invoice[];

  constructor(private billManagementService: BillManagementService, private router: Router) {
    this.billManagementService.ListAllBill().subscribe((res) => this.invoices = res);
   }

  ngOnInit() {
    


  }

  viewDetail(id) {
    this.router.navigate(['/bill-management', id])
  }

}
