import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  @Input() task: Task = { _id: '', description: '', completed: false };
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: ApiService) {}

  newDescription: string = '';

  onSubmit(task: Task, e: Event) {
    if (!this.newDescription) {
      this.newDescription = task.description;
    } else {
      task.description = this.newDescription;
    }
    this.apiService.editTask(task).subscribe();
    this.closeEdit();
  }
  closeEdit() {
    this.newDescription = this.task.description;
    this.close.emit();
  }
}
