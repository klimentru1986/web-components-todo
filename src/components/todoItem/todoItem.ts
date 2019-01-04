import tmpl from './todoItem.html';

const template = document.createElement('template');
template.innerHTML = tmpl;

export class TodoItem extends HTMLElement {
  private _completed: HTMLElement;
  private _name: HTMLElement;
  private _button: HTMLElement;

  public static get observedAttributes() {
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

  public attributeChangedCallback(
    attrName: string,
    oldVal: string,
    newVal: string
  ): void {
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

  private _addButtonClickEvent(): void {
    this._button.addEventListener('click', ev =>
      this.dispatchEvent(new CustomEvent('deleteTodo', { bubbles: true }))
    );
  }

  private _addCompletedClickEvent(): void {
    this._completed.addEventListener('click', ev =>
      this.dispatchEvent(new CustomEvent('toggleCompleted', { bubbles: true }))
    );
  }
}

customElements.define('todo-item', TodoItem);
