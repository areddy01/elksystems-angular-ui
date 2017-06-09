import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Supplier} from './supplier.model';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
    suppliers: Supplier[] = [
        new Supplier('Aditya', 'aditya@gmail.com' , 9999999),
        new Supplier('Kiran', 'aditya@gmail.com' ,  9999999),
        new Supplier('Aditya', 'aditya@gmail.com' , 9999999),
        new Supplier('Kiran', 'aditya@gmail.com' ,  9999999),
        new Supplier('Aditya', 'aditya@gmail.com' , 9999999),
        new Supplier('Kiran', 'aditya@gmail.com' ,  9999999),
        new Supplier('Aditya', 'aditya@gmail.com' , 9999999),
        new Supplier('Kiran', 'aditya@gmail.com' ,  9999999)
    ];

    constructor() {}

    ngOnInit() {}
}
