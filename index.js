const todoArr = JSON.parse(localStorage.getItem("todos")) || {
  todosArray: [],
};
renderTodos();

function renderTodos() {
  let i;
  let todoList = "";
  for (i = 0; i < todoArr.todosArray.length; i++) {
    const todoItem = todoArr.todosArray[i];
    const htmlCode = `
    <p class="display-item">
    <span class="item-name">${todoItem}</span>
   
    <button class="delete-button" onClick ="
       todoArr.todosArray.splice(${i}, 1);
       renderTodos();
    ">Delete</button>
   
    </p>
    `;
    todoList += htmlCode;
    localStorage.setItem("todos", JSON.stringify(todoArr));
  }

  const displatTodoOnPage = document.querySelector(".add-todo-items");
  displatTodoOnPage.innerHTML = todoList;
  console.log(todoList);
}

function addTodos() {
  const todoInput = document.querySelector(".js-input-todo");
  const todoInputValue = todoInput.value;
  todoArr.todosArray.push(todoInputValue);
  // console.log(todoArr.todosArray);

  todoInput.value = "";
  renderTodos();
}

function resetTodoList() {
  localStorage.removeItem("todos");
}

const switchModesBtn = document.querySelector(".switch-modes");
const bodyEle = document.querySelector('body');

const containerEle = document.querySelector('.container');

function enableDarMode() {
  if (switchModesBtn.innerHTML === "Dark Mode") {
    switchModesBtn.innerHTML = "Light Mode";
    bodyEle.style.backgroundColor = 'rgb(67, 69, 70)';
    bodyEle.style.color = 'white';
    containerEle.style.boxShadow = 'rgb(31, 30, 30)';

  }else{
    switchModesBtn.innerHTML = 'Dark Mode';
    containerEle.style.boxShadow = '1px 1px 10px 1px rgb(237, 232, 232)';
    bodyEle.style.backgroundColor = 'white';
    bodyEle.style.color = 'black';
  }
}
