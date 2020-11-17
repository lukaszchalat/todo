import { Router } from '@angular/router';
import { TodoDataService } from './../services/data/todo-data.service';
import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(private todoDataService: TodoDataService,
              private router: Router) {}

  ngOnInit() {
   this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('Lukcjusz').subscribe(
      response => this.todos = response
    )
  }

  deleteTodo(id: number) {
    this.todoDataService.deleteTodo('Lukcjusz', id).subscribe(
      response => { this.message = 'Delete Successful!'; this.refreshTodos(); }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
