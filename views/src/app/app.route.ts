import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BillAddComponent } from './bill-add/bill-add.component';
import { BillManagementComponent } from './bill-management/bill-management.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';

const appRoute: Routes = [
    {
        path: 'user-add', component: UserAddComponent
    },
    {
        path: 'user-management', component: UserManagementComponent
    },
    {
        path: 'bill-add', component: BillAddComponent
    },
    {
        path: 'bill-management', component: BillManagementComponent
    },
    {
        path: 'bill-management/:id', component: BillDetailComponent
    },
    {
        path: '**', component: HomeComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);