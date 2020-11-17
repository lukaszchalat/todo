import { API_URL } from './../../../app.constants';
import { Todo } from './../../list-todos/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username) {
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.httpClient.post(`${API_URL}/users/${username}/todos`, todo);
  }

}
