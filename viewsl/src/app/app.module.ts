import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ng2-bootstrap/modal';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { routing } from './app.route';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserAddService } from './user-add/user-add.service';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserManagementService } from './user-management/user-management.service';
import { BillAddComponent } from './bill-add/bill-add.component';
import { BillAddService } from './bill-add/bill-add.service';
import { BillManagementComponent } from './bill-management/bill-management.component';
import { BillManagementService } from './bill-management/bill-management.service';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { BillDetailService } from './bill-detail/bill-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    UserAddComponent,
    UserManagementComponent,
    BillAddComponent,
    BillManagementComponent,
    BillDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    DataTablesModule,
    routing
  ],
  providers: [UserAddService,UserManagementService,BillAddService,BillManagementService,BillDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
