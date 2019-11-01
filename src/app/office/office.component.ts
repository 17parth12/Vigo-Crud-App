import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { OfficeList } from '../office-list';
import { Router } from '@angular/router';
declare var $ : any;

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})

export class OfficeComponent implements OnInit {
    office: OfficeList[];
    _id: any;

  constructor(private _employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit() {
    this._employeeService.getoffice()
    .subscribe((data: OfficeList[])=>{
     this.office = data;
     //console.log(this.office);
     $(document).ready( function () {
      $('#myTable').DataTable(); 
  } );
    });
  }

}
