import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employees: Array<any> = [];
  public showDetails: boolean = true;
  public showEmployee: boolean = false;
  public editEmployee: boolean = false;
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.loadData();
  }
  public addEmployee() {
    this.showDetails = false;
    this.showEmployee = true;
  }
  public loadData() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
      console.log(data);
    });
  }
  public onHide(args: boolean): void {
    this.showDetails = !this.showDetails;
    this.showEmployee = args;
    this.editEmployee = args;
    this.loadData();
  }
  public onDelete(id: number): void {
    if (confirm('Bạn có chắc muốn xóa record này ?')) {
      this.employeeService.deleteEmployee(id).subscribe((data) => {
        this.loadData();
      });
    }
  }
  onSubmit() {
    this.employeeService.getAllEmployees();
  }
}
