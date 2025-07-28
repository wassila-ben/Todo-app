import { Component, ViewChild } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form';
import { TodoListComponent } from './todo-list/todo-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    TodoFormComponent,
    TodoListComponent,
    MatDividerModule,
  ],
  templateUrl: './app.html',
})
export class AppComponent {
  today = new Date();

  @ViewChild('todoList') todoListComponent!: TodoListComponent;

  onTaskAdded() {
    this.todoListComponent.loadTodos();
  }
}
