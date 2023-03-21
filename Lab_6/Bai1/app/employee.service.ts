import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public http: HttpClient) {}
  getAllEmployees(): Observable<any> {
    return this.http.get(
      `http://5f6d6deb60cf97001641adbf.mockapi.io/api/v1/employees`
    );
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get(
      `http://5f6d6deb60cf97001641adbf.mockapi.io/api/v1/employees/${id}`
    );
  }
  updateEmployee(employee: any, id: number): Observable<any> {
    return this.http.put(
      `http://5f6d6deb60cf97001641adbf.mockapi.io/api/v1/employees/${id}`,
      employee
    );
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(
      `http://5f6d6deb60cf97001641adbf.mockapi.io/api/v1/employees/${id}`
    );
  }

  addEmployee(id: number): Observable<any> {
    return this.http.delete(
      `http://5f6d6deb60cf97001641adbf.mockapi.io/api/v1/employees/${id}`
    );
  }
}
