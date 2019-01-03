(function() {
  class ToDoApp {
    constructor() {
      this._todos = [{ id: 1, name: 'test', completed: false }];
      this._addTodo = document.querySelector('#add-todo');
      this._todoList = document.querySelector('#todo-list');

      this._addTodoEventListener();
      this._deleteTodoEventListener();

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

    _deleteTodoEventListener() {
      this._todoList.addEventListener('deleteTodo', ev => {
        const element = ev.target;
        this._todos = this._todos.filter(td => td.id !== element.id);
        this._todoList.removeChild(element);
      });
    }

    _renderTodoList() {
      const todos = this._todos.map(td => this._mapTodoToElement(td));
      this._todoList.innerHTML = todos.join('');
    }

    _mapTodoToElement(todo) {
      return `<todo-item id="${todo.id}" 
            name="${todo.name}" 
            completed="${todo.completed}">
            ${todo.name}
          </todo-item>`;
    }

    _getTodoId() {
      const id = this._todos[0] ? this._todos[0].id : 0;

      return id + 1;
    }
  }

  new ToDoApp();
})();
