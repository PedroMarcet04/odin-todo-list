const toDoItemsContainter = document.querySelector("body");

class ToDoData {
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

class ToDoHTML {
    #data;
    #html;

    generateHTML() {
        this.#html = document.createElement("div");
        this.#html.id = this.#data.id;
        this.#html.classList.add("todo-item");

        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = this.#data.title;
        this.#html.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("desc");
        description.textContent = this.#data.description;
        this.#html.appendChild(description);
    }

    refresh() {
        const title = this.#html.querySelector(".title");
        title.textContent = this.#data.title;

        const description = this.#html.querySelector(".desc");
        description.textContent = this.#data.description;
    }

    constructor(data) {
        this.#data = data

        this.generateHTML();
    }

    addToList() {
        toDoItemsContainter.appendChild(this.#html);
    }
}

class ToDoItem {
    #data
    html

    constructor() {
        this.#data = new ToDoData();
        this.html = new ToDoHTML(this.#data);
    }

    set title(t) {
        this.#data.title = t;
        this.html.refresh();
    }

    set description(d) {
        this.#data.description = d;
        this.html.refresh();
    }
}
export default ToDoItem;