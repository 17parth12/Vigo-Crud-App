import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { OfficeList } from './Office-List';
import { Empsalary } from './Empsalary';
import { Department } from './department';
import { Manager } from './manager';
import { Location } from './location';
import { Addoffice } from './addoffice'
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  _$(document: Document) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getEmployee() {
    //Redirecting and getting data from list.php.
    return this.http.get<Employee[]>('http://localhost/phpvigo/list.php');    
  }

   //Redirecting and getting data from office.php.
  getoffice(){
    return this.http.get<OfficeList[]>('http://localhost/phpvigo/office.php');
  }

  //Redirecting and getting data from salary.php.
  getsalary(){
    return this.http.get<Empsalary[]>('http://localhost/phpvigo/salary.php');
  }

  //Redirecting and getting data from department.php.
  getdepartment(){
    return this.http.get<Department[]>('http://localhost/phpvigo/department.php');
  }

   //Redirecting and getting data from department.php.
   getmanager(){
    return this.http.get<Manager[]>('http://localhost/phpvigo/manager.php');
  }

  //Redirecting and getting data from department.php.
  getlocation(){
    return this.http.get<Location[]>('http://localhost/phpvigo/location.php');
  }





  deleteEmployee(id:number){
    //Redirecting delete id to delete.php to remove related row of data.
    return this.http.delete<Employee[]>('http://localhost/phpvigo/delete.php?id=' + id);
  }
 
  createemployee(employee: Employee){
    //Pushing form data entered  by user to insert.php.
    return this.http.post('http://localhost/phpvigo/insert.php', employee);
  }

  createoffice(addoffice: Addoffice){
    //Pushing form data entered  by user to ins_office.php.
    return this.http.post('http://localhost/phpvigo/insoffice.php', addoffice);
  }



  getById(id:number)
  {
    //Redirecting ID to getByID.php and fetching related data for update function.
    return this.http.get<Employee[]>('http://localhost/phpvigo/getById.php?id=' + id);
  }

  updateEmployee(employee: Employee){
   //Redirecting updated from data to update.php to update database record. 
   return this.http.put('http://localhost/phpvigo/update.php' +'?id=' + employee.id, employee);
  }

}
