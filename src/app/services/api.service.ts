import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3002/task';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task, this.httpOptions);
  }
  deleteTask(task: Task): Observable<Task> {
    const taskToDeleteUrl = `${this.url}/${task._id}`;
    return this.http.delete<Task>(taskToDeleteUrl);
  }
}
