import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ng2-bootstrap/modal';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { routing } from './app.route';
import { SidebarComponent, } from './shared/sidebar/sidebar.component';
import { UserAddComponent, UserAddService } from './user-add/index';
import { UserManagementComponent, UserManagementService } from './user-management/index';
import { BillManagementComponent, BillManagementService } from './bill-management/index';
import { BillAddComponent, BillAddService } from './bill-add/index';
import { HomeComponent } from './home/index';
import { BillDetailComponent, BillDetailService } from './bill-detail/index';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserAddComponent,
    UserManagementComponent,
    BillManagementComponent,
    BillAddComponent,
    HomeComponent,
    BillDetailComponent

  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTablesModule
  ],
  providers: [UserAddService, UserManagementService, BillAddService, BillManagementService, BillDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
