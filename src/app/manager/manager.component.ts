import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Manager } from '../Manager';
import { Router } from '@angular/router';
declare var $ : any;

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  manager: Manager[];
  _id: any;


constructor(private _employeeService: EmployeeService,
  private router: Router
  ) { }

ngOnInit() {
  this._employeeService.getmanager()
  .subscribe((data: Manager[])=>{
   this. manager = data;
  // console.log(this.Department);
   $(document).ready( function () {
    $('#myTable').DataTable();
} );
  });
}

}


