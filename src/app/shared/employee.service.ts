import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = [
    {
        name: 'Apurva',
        designation: 'Associate Consultant',
        salary: 40000
    },
    {
        name: 'Veena',
        designation: 'Manager',
        salary: 100000
    },
    {
        name: 'Ankush',
        designation: 'Business Analyst',
        salary: 600000
    },
    {
        name: 'Shivani',
        designation: 'Senior Consultant',
        salary: 55000
    }
];

  constructor(private http: HttpClient ) { }

  emitEdittedUser = new EventEmitter<Employee>();
  emitUserlist = new EventEmitter<any>();

  getEmployees(): Observable<any> {
    return this.http.get('/assets/employee.json');
  }

  getEmployeesEdit(empName): Observable<any> {
    return this.http.get('/assets/employee.json');
  }

  deleteEmployee(empId) {
    const employeeData = this.http.delete('/assets/employee.json');
    return employeeData;
  }

  createEmployee(empData: Employee) {
    return this.http.post('/assets/employee.json/', empData);
  }
}
