import { Component, OnInit } from '@angular/core';
import { UserAddService } from './user-add.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  firstname: String;
  lastname: String;
  email: String;
  sex: String;
  birthday: String;

   

  constructor(private userAddService: UserAddService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userAddService.addUser(this.firstname, this.lastname, this.email, this.sex, this.birthday).subscribe(res => {
      alert(res.massage);     
      location.reload();
    });
  }

}