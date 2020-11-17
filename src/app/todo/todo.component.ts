import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './../list-todos/todo';
import { TodoDataService } from './../services/data/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    // tslint:disable-next-line: triple-equals
    if(this.id != -1) {
      this.todoDataService.retrieveTodo('Lukcjusz', this.id)
                          .subscribe((response) => (this.todo = response));
    }
  }

  saveTodo() {
    if(this.id == -1) {
      this.todoDataService.createTodo('Lukcjusz', this.todo).subscribe(
        response => this.router.navigate(['todos'])
      )
    } else {
      this.todoDataService.updateTodo('Lukcjusz', this.id, this.todo).subscribe(
        response => this.router.navigate(['todos'])
      )
    }
  }
}

