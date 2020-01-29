import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee-details',
  templateUrl: './edit-employee-details.component.html',
  styleUrls: ['./edit-employee-details.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;
  empName: string;
  empInd: number;

  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.empName = this.route.snapshot.params['name'];
    this.route.params.subscribe((params) => {
      // tslint:disable-next-line: no-string-literal
      this.empName = this.route.snapshot.params['name'];
    });
    const modiName = this.empName.split('_').join(' ');

    this.employee = this.empService.employeeList.find(eachUser => (eachUser.name === modiName));
  }

  onSubmit(formData) {
    this.employee = formData.value;
    // tslint:disable-next-line: no-string-literal
    this.empInd = this.route.snapshot.params['id'];
    this.empService.employeeList[this.empInd] = this.employee;
    this.router.navigate(['/viewEmployee']);
  }

}
