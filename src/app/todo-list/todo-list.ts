import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  toggleDone(todo: Todo) {
    todo.done = !todo.done;
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== id);
    });
  }
}
