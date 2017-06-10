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
        new Supplier('John Smith', 'smith.john@gmail.com' , '940-565-2000','05/05/2017','Jupiter Drive, Florida'),
        new Supplier('Bob Snyder', 'snyder@gmail.com' ,  '876-987-7654','05/12/2016','Octane Street, California'),
        new Supplier('Fred Anderson', 'anderson@gmail.com' , '908-654-7654','05/06/2017','Orlando Drive, Carolina'),
        new Supplier('Daniel Ford', 'daniel@gmail.com' ,  '096-097-3476','01/31/2013','Ness Street, Hamilton'),
        new Supplier('Angela Matheus', 'angela@gmail.com' , '124-095-1276','11/25/2014','Central Colony, New York'),
        new Supplier('Mishell', 'mishell@gmail.com' ,  '109-187-1096','09/12/2016','Miami, Florida'),
        new Supplier('Cooper Janie', 'janie@gmail.com' , '875-197-1870','05/30/2017','Denton, Texas'),
        new Supplier('Liang Francis', 'francis@gmail.com' ,  '514-091-9191','08/05/2016','Wayne Street, Illinois')
    ];

    constructor() {}

    ngOnInit() {}
}
