import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.html',
  styleUrls: ['./todo-form.scss']
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
