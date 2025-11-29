
// sections
const createTodoSection = document.getElementById("create-todo");
const todoListSection = document.getElementById("todo-list");

// create todo
const inputTituloTodo = document.getElementById("titulo-todo");
const inputDescricaoTodo = document.getElementById("descricao-todo");
const submitCreateTodo = document.getElementById("submit-create-todo");

let listTodo = [];

function Todo(titulo, descricao){
    this.titulo = titulo;
    this.descricao = descricao;
}

const saveList = () => {
    localStorage.setItem("list-todo", listTodo);
}

const createTodo = () => {
    let todo = new Todo(
        inputTituloTodo.value(),
        inputDescricaoTodo.value()
    );
    listTodo.push(todo);
    saveList();
    createCardToDo(todo);
}


const createCardToDo = (todo) => {
    const htmlCard = `
            <h2 class=tituloTodo>${todo.titulo}<\h2>
            <p class=descricaoTodo>${todo.descricao}<\h2>
    `;

    const card = document.createElement("div");
    card.classList.add("cardTodo");

    todoListSection.appendChild(card);
}

const renderTodoInList = () => {
    listTodo = localStorage.getItem("list-todo");

    listTodo.forEach((todo) => createCardToDo(todo));
}

renderTodoInList();

submitCreateTodo.addEventListener("click", () => createTodo());
