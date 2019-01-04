import './styles.css';
import { MOCK_TODOS } from './const/mockTodos';
import { Todo } from './models/Todo';
import { AddTodo } from './components/addTodo/addTodo';

class ToDoApp {
  private _todos: Todo[] = [...MOCK_TODOS].reverse();
  private _addTodo: AddTodo = document.querySelector('#add-todo');
  private _todoList = document.querySelector('#todo-list');

  constructor() {
    this._addTodoEventListener();
    this._deleteTodoEventListener();
    this._toggleCompleted();

    this._renderTodoList();
  }

  _addTodoEventListener() {
    this._addTodo.addEventListener('addTodo', ev => {
      if (!this._addTodo.value) {
        return;
      }

      const todo = {
        id: this._getTodoId(),
        name: this._addTodo.value,
        completed: false
      };

      this._todos = [todo, ...this._todos];
      this._todoList.innerHTML =
        this._mapTodoToElement(todo) + this._todoList.innerHTML;
      this._addTodo.value = null;
    });
  }

  _toggleCompleted() {
    this._todoList.addEventListener('toggleCompleted', ev => {
      const element = <HTMLElement>ev.target;
      const todo = this._todos.find((td: Todo) => td.id === +element.id);
      todo.completed = !todo.completed;
      element.setAttribute('completed', `${todo.completed}`);
    });
  }

  private _deleteTodoEventListener(): void {
    this._todoList.addEventListener('deleteTodo', ev => {
      const element = <HTMLElement>ev.target;
      this._todos = this._todos.filter(td => td.id !== +element.id);
      this._todoList.removeChild(element);
    });
  }

  private _renderTodoList(): void {
    const todos = this._todos.map(td => this._mapTodoToElement(td));
    this._todoList.innerHTML = [...todos].join('');
  }

  private _mapTodoToElement(todo: Todo): string {
    return `<todo-item id="${todo.id}" 
            name="${todo.name}" 
            completed="${todo.completed}">
            ${todo.name}
          </todo-item>`;
  }

  private _getTodoId(): number {
    const id = this._todos[0] ? this._todos[0].id : 0;

    return id + 1;
  }
}

new ToDoApp();
