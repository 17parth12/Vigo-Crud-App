import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Empsalary } from '../Empsalary';
import { Router } from '@angular/router';
declare var $ : any;
@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salary: Empsalary[];
  _id: any;
  

constructor(private _employeeService: EmployeeService,
  private router: Router
  ) { }

ngOnInit() {
  this._employeeService.getsalary()
  .subscribe((data: Empsalary[])=>{
   this.salary = data;
  // console.log(this.salary);
   $(document).ready( function () {
    $('#myTable').DataTable();
   
});
  });
}

}
