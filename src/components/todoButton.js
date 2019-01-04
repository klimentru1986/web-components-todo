const template = document.createElement('template');
template.innerHTML = `
    <style>
    button {
        background: #3F51B5;
        color: white;
        border: none;
        font-size: 22px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        box-shadow: 3px 3px 2px 0px rgba(50, 50, 50, 0.5);
        cursor: pointer;
        transition: all 0.3s;
    }

    button:hover {
        box-shadow: none;
    }

    button:focus {
        outline: none;
    }
    </style>

    <button><slot></slot></button>
    `;

class TodoButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('todo-button', TodoButton);
