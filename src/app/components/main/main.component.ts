import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  tasks: Task[] = [];

  isTasks = false;
  
  addTask(newTask: Task) {
    this.tasks.push(newTask);
    this.isTasks = true;
  }
}
