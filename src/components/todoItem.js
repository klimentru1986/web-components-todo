(function() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
  :host {
      display: flex;
      align-items: center;
      margin: 5px 0;
  }

  .name {
      flex: 1;
      font-size: 20px;
      margin: 5px 10px;  
  }
  </style>
  <div class="completed"></div>
  <div class="name">
    <slot></slot>
  </div>
  <todo-button>-</todo-button>
  `;

  class TodoItem extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'completed'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this._button = this.shadowRoot.querySelector('todo-button');
      this._button.addEventListener('click', ev =>
        this.dispatchEvent(new CustomEvent('deleteTodo', { bubbles: true }))
      );
    }
  }

  customElements.define('todo-item', TodoItem);
})();
