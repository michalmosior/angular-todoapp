import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  description: string = '';
  completed: boolean = false;

  validate = false;

  onSubmit(e: Event): void {
    e.preventDefault();
    if (!this.description) {
      this.validate = true;
      console.log(this.validate);
      return;
    } else {
      this.validate = false;
      const newTask: Task = {
        description: this.description,
        completed: this.completed,
      };
      this.onAddTask.emit(newTask);

      this.cleanTaskInput();
    }
  }
  cleanTaskInput() {
    this.description = '';
  }
}
