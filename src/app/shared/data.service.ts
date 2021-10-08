import { Todo } from '../shared/todo.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    // new Todo('this is a Test!'),
    // new Todo(
    //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores adipisci repudiandae amet modi unde id non aperiam molestiae, alias, soluta quae doloremque. Eligendi facilis doloremque distinctio, enim possimus dolorem.'
    // ),
    //
  ];
  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('Datatodo', JSON.stringify(this.todos));
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
