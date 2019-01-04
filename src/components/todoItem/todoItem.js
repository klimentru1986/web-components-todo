import tmpl from './todoItem.html';

const template = document.createElement('template');
template.innerHTML = tmpl;

class TodoItem extends HTMLElement {
  static get observedAttributes() {
    return ['completed'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._completed = this.shadowRoot.querySelector('.completed');
    this._name = this.shadowRoot.querySelector('.name');
    this._button = this.shadowRoot.querySelector('todo-button');

    this._addButtonClickEvent();
    this._addCompletedClickEvent();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'completed') {
      if (newVal === 'true') {
        this._completed.classList.add('inactive');
        this._name.classList.add('inactive');
      } else {
        this._completed.classList.remove('inactive');
        this._name.classList.remove('inactive');
      }
    }
  }

  _addButtonClickEvent() {
    this._button.addEventListener('click', ev =>
      this.dispatchEvent(new CustomEvent('deleteTodo', { bubbles: true }))
    );
  }

  _addCompletedClickEvent() {
    this._completed.addEventListener('click', ev =>
      this.dispatchEvent(new CustomEvent('toggleCompleted', { bubbles: true }))
    );
  }
}

customElements.define('todo-item', TodoItem);
