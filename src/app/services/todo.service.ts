import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(text: string): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, { text });
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(`${this.apiUrl}/${todo.id}`, { done: todo.done });
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
