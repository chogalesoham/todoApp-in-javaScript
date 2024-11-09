const inputValue = document.getElementById("input-value");
const todoContaner = document.getElementById("todo-contaner");

const addTodo = () => {
  if (inputValue.value === "") {
    alert("Write Somting In Todo");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputValue.value;
    todoContaner.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputValue.value = "";
  saveData();
};

todoContaner.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checkd");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", todoContaner.innerHTML);
};

const showData = () => {
  todoContaner.innerHTML = localStorage.getItem("data");
};

showData();
