(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
    :host {
        display: flex;
        color: #333;
        align-items: center;
    }

    input {
        flex: 1;
        border: none;
        border-bottom: 1px solid gray;
        box-sizing: border-box;
        padding: 5px 10px;
        margin-right: 15px;
        font-size: 22px;
    }

    input:focus {
        outline: none;
        border-bottom: 1px solid #3F51B5;
    }

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
    
    <input type="text"/>
    <button>+</button>
  `;

  class AddTodo extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      const button = this.shadowRoot.querySelector('button');
      button.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('addTodo'));
      });
    }
  }

  customElements.define('add-todo', AddTodo);
})();
