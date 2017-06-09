import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SupplierPipe} from './suppliers.filterpipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        AdminDashboardRoutingModule
    ],
    declarations: [
        AdminDashboardComponent ,
        SupplierPipe
    ]
})
export class AdminDashboardModule { }
