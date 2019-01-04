import tmpl from './todoButton.html';

const template = document.createElement('template');
template.innerHTML = tmpl;

export class TodoButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('todo-button', TodoButton);
