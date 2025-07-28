import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './todo-form.html',
})
export class TodoFormComponent {
  newTask: string = '';

  @Output() taskAdded = new EventEmitter<void>();

  constructor(private todoService: TodoService) {}

  addTask() {
    const text = this.newTask.trim();
    if (text) {
      this.todoService.addTodo(text).subscribe(() => {
        this.newTask = '';
        this.taskAdded.emit();
      });
    }
  }
}
