(function() {
  class ToDoApp {
    constructor() {
      this.todos = [];
      this._addTodo = document.querySelector('#add-todo');
      this._todoList = document.querySelector('#todo-list');

      this._addTodoEvent();
    }

    _addTodoEvent() {
      this._addTodo.addEventListener('addTodo', ev => {
        if (!this._addTodo.value) {
          return;
        }

        this.todos.push({
          id: Math.floor(Math.random() * 1000),
          name: this._addTodo.value
        });

        this._addTodo.value = null;

        this._render();
      });
    }

    _render() {
      const todos = this.todos.map(td => `<div id="${td.id}">${td.name}</div>`);
      this._todoList.innerHTML = todos.join('');
    }
  }

  new ToDoApp();
})();
