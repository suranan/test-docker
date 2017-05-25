import { Component, OnInit, ElementRef } from '@angular/core';

import { UserManagementService } from './user-management.service';

import { User } from './user-management.model';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers: [UserManagementService]
})
export class UserManagementComponent implements OnInit {

  listAllUsers: User[];
  id: String;
  firstname: String;
  lastname: String;
  email: String;
  sex: String;
  birthday: String;
  user: User;

  constructor(private userManagementService: UserManagementService) {
    this.userManagementService.ListAllUser().subscribe((res) => this.listAllUsers = res);

  }

  ngOnInit() {
  }

  onSelectUser(id) {
    this.userManagementService.selectUser(id).subscribe(res => {
      this.user = res;
      this.id = res._id;
      this.firstname = res.firstname;
      this.lastname = res.lastname;
      this.email = res.email;
      this.sex = res.sex;
      this.birthday = res.birthday;
    });
  }
  onSaveUser() {
    this.userManagementService.saveUser(this.id, this.firstname, this.lastname, this.email, this.sex, this.birthday).subscribe(res => {
      alert(res.massage);
      location.reload();
    });
  }

  onDeleteUser() {

    if (this.id) {
      this.userManagementService.deleteUser(this.id).subscribe(res => {
        alert(res.massage);
        location.reload();
      });
    } else {
      alert('กรุณาเลือกผู้ใช้งาน');
    }
  }

}