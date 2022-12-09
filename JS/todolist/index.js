import { createList, themeToggle } from "./func.js";
const body = document.body;
console.log(body);

// wrapper
const wrapper = document.createElement("div");
body.append(wrapper);
wrapper.className = "wrapper";

// header
const newHeader = document.createElement("header");
newHeader.className = "header";
wrapper.append(newHeader);

// Заголовок
const newTitle = document.createElement("h1");
newHeader.append(newTitle);
newTitle.textContent = "TO DO LIST";
newTitle.style.color = "red";

// Кнопка темы
const buttonOne = document.createElement("button");
wrapper.append(buttonOne);
buttonOne.className = "themeButton";
buttonOne.id = "theme_button";
buttonOne.classList.add("btn");
buttonOne.textContent = "Темная тема";

// Контейнер
const section = document.createElement("section");
wrapper.append(section);
section.className = "container";

// Контент
const content = document.createElement("content");
section.append(content);
section.className = "content";

//Обертка формы добавления задачи
const wrapperAdd = document.createElement("wrapperAdd");
content.append(wrapperAdd);
wrapperAdd.className = "wrapperAdd";

// Поле ввода задачи
const input = document.createElement("input");
wrapperAdd.append(input);
input.id = "input";
input.type = "text";
input.className = "input";

// Кнопка добавления задачи
const buttonAdd = document.createElement("button");
wrapperAdd.append(buttonAdd);
buttonAdd.textContent = "Добавить";
buttonAdd.className = "buttonAdd";
buttonAdd.id = "buttonAdd";
buttonAdd.classList.add("btn");

//Список
const list = document.createElement("ul");
content.append(list);
list.className = "list";
list.id = "list";

//Обертка элемента списка
const wrapperListItem = document.createElement("wrapper");
list.append(wrapperListItem);
wrapperListItem.className = "wrapperListItem";

createList();
const themeBtn = document.getElementById("theme_button");
themeBtn.addEventListener("click", themeToggle);

const btnAdd = document.getElementById("buttonAdd");
function createListItem() {
  const newListItem = document.createElement("li");
  newListItem.className = "li";
  newListItem.textContent = input.value;
  list.append(newListItem);
}
btnAdd.addEventListener("click", createListItem);


