import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

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

  editTask(task: Task): Observable<Task> {
    const taskToEditUrl = `${this.url}/${task._id}`;
    return this.http.put<Task>(taskToEditUrl, task, this.httpOptions);
  }
}
