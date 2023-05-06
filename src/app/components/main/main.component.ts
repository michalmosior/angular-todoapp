import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private apiService: ApiService) {}

  isTasks = false;

  ngOnInit(): void {
    this.apiService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.tasks.length > 0 ? (this.isTasks = true) : (this.isTasks = false);
    });
  }

  addTask(newTask: Task) {
    this.apiService.addTask(newTask).subscribe((newTask) => {
      this.tasks.unshift(newTask);
      this.isTasks = true;
    });
  }

  deleteTask(task: Task) {
    this.apiService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((item) => item._id !== task._id);
      this.tasks.length === 0 ? (this.isTasks = false) : (this.isTasks = true);
    });
  }
}
