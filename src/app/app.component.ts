import { Component, ViewChild, Renderer2 } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form';
import { TodoListComponent } from './todo-list/todo-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    TodoFormComponent,
    TodoListComponent,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './app.html',
})
export class AppComponent {
  today = new Date();
  isDarkMode = false;

  @ViewChild('todoList') todoListComponent!: TodoListComponent;

  constructor(private router: Router, private renderer: Renderer2) {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.updateTheme();
  }

  isLoggedIn = false; // à connecter à ton auth service

  logout() {  
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  onTaskAdded() {
    this.todoListComponent.loadTodos();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  private updateTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(document.body, 'data-theme', theme);
  }
}
