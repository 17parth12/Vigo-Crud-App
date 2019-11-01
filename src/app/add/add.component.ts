import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service'; 
import { Router } from '@angular/router';
import { Location } from '../location';
import { Employee } from '../employee';
declare var id:any;


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  _id: any;
  location: Location[];
  constructor(private formBuilder: FormBuilder, 
    private _employeeService:EmployeeService,
    private router: Router )  { }
  
  addForm: FormGroup;
  ngOnInit() {
   // Form Validation
    
    this.addForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.maxLength(30)]],
      lname: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
      phone: ['', Validators.required],
      position: ['', [Validators.required, Validators.maxLength(11)]],
      postcode: ['', Validators.required]
    
   });

   this._employeeService.getlocation()
  .subscribe((data: Location[])=>{
   this. location = data;
  // console.log(this.location);
  });
  }

  //Subscribe to service and redirect main page(View page).
  onSubmit(){
  //console.log(this.addForm.value);
    this._employeeService.createemployee(this.addForm.value)
    .subscribe(data => {
       this.router.navigate(['view']);
    })
  }
}
