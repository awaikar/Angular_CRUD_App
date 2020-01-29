import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class EmpViewComponent implements OnInit {
  empDetails = [];
  edittedUser: Employee;

  constructor(private empService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.empDetails = this.empService.employeeList;
  }

  getEmployeeData() {
    this.empService.getEmployees().subscribe((empData) => {
      const employeeData = [];
      employeeData.push(...empData);
      this.empDetails = employeeData;
    });
  }

  deleteEmployee(empID) {
    if (confirm('Are you sure to delete the Employee')) {
      if (empID > -1) {
        return this.empDetails.splice(empID, 1);
      }
    }
  }

  editEmployee(empInd) {
    this.edittedUser = this.empDetails[empInd];
    const modiName = this.edittedUser.name.split(' ').join('_');
    this.router.navigate(['/editEmployee', modiName, empInd]);
  }
}
