import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'employeemanagerapp';

  public employees: Employee[] = [];
  
  constructor(private EmployeeService: EmployeeService){}

  ngOnInit(){
    this.getEmployees();
  }

  getEmployees(): void {
    this.EmployeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
