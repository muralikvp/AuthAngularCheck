import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/Todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todoData: any;
  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.LoadTodo();
  }

  LoadTodo() {
    this.service.LoadTodo().subscribe((data) => {
      this.todoData = data;
      console.log(this.todoData);
    });
  }
}
