import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Location } from '../location';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'] 
})
export class ViewComponent implements OnInit {
  employee: Employee[];
  _id: any;
  
  constructor(private _employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit() {
    //getEmployee function redirect to service.
    this._employeeService.getEmployee()
    .subscribe((data: Employee[]) => {
        this.employee = data;
        //console.log(this.employee);
        //jquery function for pagination,sorting and search options.
        $(document).ready( function () {
          $('#myTable').DataTable();
      } );
    });    
  }

//Delete function to redirect service.
  delete(employee: Employee): void{
   this._employeeService.deleteEmployee(employee.id)
      .subscribe(data => {
         this.employee = this.employee.filter(u => u !== employee); 
         window.location.reload();
      });
  }

  //Edit function to redirect id to edit page.
   edit(employee: Employee){
      this._id = employee.id;
      this.router.navigate(['edit/' + this._id]); 
   }
}
