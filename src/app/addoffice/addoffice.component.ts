import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeeService} from '../employee.service'; 
import { Router } from '@angular/router';
import { Addoffice } from '../addoffice';

@Component({
  selector: 'app-addoffice',
  templateUrl: './addoffice.component.html',
  styleUrls: ['./addoffice.component.css']
})
export class AddofficeComponent implements OnInit {
  _id: any;
  location : Location[];
  constructor(private formBuilder: FormBuilder, 
    private _employeeService:EmployeeService,
    private router: Router )  { }
  
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      phone: ['', Validators.required],
      postcode: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required]
  });

  }
  onSubmit(){
    //console.log(this.addForm.value);
    this._employeeService.createoffice(this.addForm.value)
    .subscribe(data => {
       this.router.navigate(['view']);
    })
  }

}
