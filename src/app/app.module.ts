import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpCreateComponent } from './create-employee-details/create-employee-details.component';
import { EmpViewComponent } from './view-employee-details/view-employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee-details/edit-employee-details.component';
import { FilterPipe } from './view-employee-details/search.pipe';
import { EmployeeService } from './shared/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpCreateComponent,
    EmpViewComponent,
    EditEmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  exports: [FilterPipe]
})
export class AppModule { }
