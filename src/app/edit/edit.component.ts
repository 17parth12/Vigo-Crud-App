import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeeService} from '../employee.service'; 
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { Edit } from '../edit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee: any;

  constructor(private formBuilder: FormBuilder, 
    private _employeeService:EmployeeService,
    private router: Router,
    private routes: ActivatedRoute )  { }

  addForm: FormGroup;
  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
   //  console.log(routeParams.id)
   
    this.addForm = this.formBuilder.group({
    // Form Validations.
      id: [''],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      position: ['', Validators.required]
   });
    
   this._employeeService.getById(routeParams.id).subscribe((data: any) => {
    console.log(data)
    this.addForm.patchValue(data);
  });
  }
    
  //Subscribing data to service and redirect page to main page(View).
  update(){
    //console.log(this.addForm.value);
    this._employeeService.updateEmployee(this.addForm.value).subscribe(() => {
    this.router.navigate(['view']);
    },
      error => {
        alert(error);
      });
      
    }
    
}
