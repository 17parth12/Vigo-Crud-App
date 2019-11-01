import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { OfficeComponent } from './office/office.component';
import { SalaryComponent } from './salary/salary.component';
import { DepartmentComponent } from './department/department.component';
import { ManagerComponent } from './manager/manager.component';
import { LocationComponent } from './location/location.component';
import { AddofficeComponent } from './addoffice/addoffice.component';



export const routes: Routes = [
{path: '', component: ViewComponent, pathMatch: 'full'},
{path: 'view', component: ViewComponent },
{path: 'add', component: AddComponent },
{path: 'edit/:id', component: EditComponent },
{path: 'office', component: OfficeComponent },
{path: 'salary', component: SalaryComponent },
{path: 'department', component: DepartmentComponent },
{path: 'manager', component: ManagerComponent },
{path: 'location', component: LocationComponent },
{path: 'addoffice', component: AddofficeComponent },







];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    OfficeComponent,
    SalaryComponent,
    DepartmentComponent,
    ManagerComponent,
    LocationComponent,
    AddofficeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
