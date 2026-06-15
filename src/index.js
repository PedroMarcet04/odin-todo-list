import styleSheet from "./style.css";

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
        return {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
        }.stringify();
    }
}