import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpCreateComponent } from './create-employee-details/create-employee-details.component';
import { EmpViewComponent } from './view-employee-details/view-employee-details.component';
import { EditEmployeeComponent } from './edit-employee-details/edit-employee-details.component';


const routes: Routes = [
  {path: 'creatEmployee', component: EmpCreateComponent},
  {path: 'viewEmployee', component: EmpViewComponent},
  {path: 'editEmployee/:name/:id', component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
