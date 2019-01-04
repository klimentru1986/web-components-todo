import tmpl from './addTodo.html';

const template = document.createElement('template');
template.innerHTML = tmpl;

export class AddTodo extends HTMLElement {
  private _input: HTMLInputElement;
  private _button: HTMLElement;

  public static get observedAttributes() {
    return ['value'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._input = this.shadowRoot.querySelector('input');
    this._button = this.shadowRoot.querySelector('todo-button');

    this._button.addEventListener('click', () =>
      this.dispatchEvent(new CustomEvent('addTodo'))
    );
  }

  get value() {
    return this._input.value;
  }

  set value(val) {
    this._input.value = val;
  }
}

customElements.define('add-todo', AddTodo);
