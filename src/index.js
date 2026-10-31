import styleSheet from "./style.css";
import ToDoItem from "./todo-item.js";

let item = new ToDoItem();
item.html.addToList();
item.title = "HELLO";
console.log(item.data.toString());
