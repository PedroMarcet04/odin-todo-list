import styleSheet from "./style.css";

const toDoItemsContainter = document.querySelector("body");

class ToDoItem {
    #id;
    title;
    description;
    dueDate;
    priority;

    constructor() {
        this.#id = crypto.randomUUID();
    }

    get id() {
        return this.#id;
    }

    toString() {
        return JSON.stringify(
            {
                title: this.title,
                description: this.description,
                dueDate: this.dueDate,
                priority: this.priority,
            }
        );
    }
}

class ToDoItemHTML {
    #item;
    #html;

    generateHTML() {
        this.#html = document.createElement("div");
        this.#html.classList.add("todo-item");

        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = this.#item.title;
        this.#html.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("desc");
        description.textContent = this.#item.description;
        this.#html.appendChild(description);
    }

    constructor(item) {
        this.#item = item

        this.generateHTML();
    }

    addToList() {
        toDoItemsContainter.appendChild(this.#html);
    }
}

let item = new ToDoItem();
item.title = "Hello";
item.description = "World";
new ToDoItemHTML(item).addToList();
console.log(item.toString());
