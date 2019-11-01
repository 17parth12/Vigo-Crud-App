import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
import { Router } from '@angular/router';
declare var $ : any;


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department: Department[];
  _id: any;

constructor(private _employeeService: EmployeeService,
  private router: Router
  ) { }

ngOnInit() {
  this._employeeService.getdepartment()
  .subscribe((data: Department[])=>{
   this. department = data;
  // console.log(this.Department);
   $(document).ready( function () {
    $('#myTable').DataTable();
});
  });
}

}

