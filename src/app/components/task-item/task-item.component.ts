import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task = { _id: '', description: '', completed: false };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleCompletedTask: EventEmitter<Task> = new EventEmitter();
  isEdit = false;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  editInputToggle() {
    this.isEdit = !this.isEdit;
  }
  onToggleCompleted(task: Task) {
    this.onToggleCompletedTask.emit(task);
  }
}
