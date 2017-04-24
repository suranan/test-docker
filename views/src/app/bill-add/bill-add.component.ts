import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { BillAddService, Product } from './index';



import { User } from './../user-management/user-management.model';
@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.css']
})
export class BillAddComponent implements OnInit {

  inv_no: String;
  user_code: String;
  date: String;

  products = [];
  product: Product;
  prod_name: String;
  prod_price: String;
  prod_qty: String;

  listAllUsers: User[];

  constructor(private billAddService: BillAddService) {

    this.billAddService.getUserList().subscribe((res) => this.listAllUsers = res);
  }

  ngOnInit() {
  }

  addProduct() {

    this.product = {
      product_name: this.prod_name,
      product_price: this.prod_price,
      product_qty: this.prod_qty
    };
    this.products.push(this.product);

    this.prod_name = '';
    this.prod_price = '';
    this.prod_qty = '';
    this.childModal.hide();
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
  }

  onSave() {

    this.billAddService.addBill(this.inv_no, this.user_code, this.date, this.products).subscribe(res => {
      alert(res.massage);
      location.reload();
    });

  }

  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }



}
