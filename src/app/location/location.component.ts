import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Location } from '../location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location: Location[];
  _id: any;

constructor(private _employeeService: EmployeeService,
  private router: Router
  ) { }

ngOnInit() {
  this._employeeService.getlocation()
  .subscribe((data: Location[])=>{
   this. location = data;
   //console.log(this.location);
  });
}

}
