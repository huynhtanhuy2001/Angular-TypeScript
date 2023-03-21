import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  endPoint = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getUsers(): Observable<User> {
    return this.httpClient
      .get<User>(this.endPoint + '/users')
      .pipe(retry(1), catchError(this.httpError));
  }
  getUser(id: any): Observable<User> {
    return this.httpClient
      .get<User>(this.endPoint + '/users/' + id)
      .pipe(retry(1), catchError(this.httpError));
  }
  create(user: any): Observable<User> {
    return this.httpClient
      .post<User>(
        this.endPoint + '/users',
        JSON.stringify(user),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }
  update(id: any, data: any): Observable<User> {
    return this.httpClient
      .put<User>(
        this.endPoint + '/users/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }
  delete(id: any) {
    return this.httpClient
      .delete<User>(this.endPoint + '/users/' + id, this.httpHeader)
      .pipe(retry(1), catchError(this.httpError));
  }
  httpError(error: any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
