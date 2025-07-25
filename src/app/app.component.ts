import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoFormComponent } from './todo-form/todo-form';
import { TodoListComponent } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    TodoFormComponent, 
    TodoListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  @ViewChild('todoList') todoListComponent!: TodoListComponent;

onTaskAdded() {
    this.todoListComponent.loadTodos();
  }
}