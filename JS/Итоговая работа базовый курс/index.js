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

    // Кнопка
const buttonOne= document.createElement("button");
wrapper.append(buttonOne);
buttonOne.className = "btn";
// button.id="theme button";
buttonOne.textContent = "Темная тема";

    // Контейнер
const section=document.createElement("section");
wrapper.append(section);
section.className = "container";

        // Контент
const content=document.createElement("content");
section.append(content);
section.className = "content";
            //Обертка формы добавления задачи
const wrapperAdd=document.createElement("wrapperAdd");
content.append(wrapperAdd);
section.className = "wrapperAdd";
                // Поле ввода задачи
const input=document.createElement("input");
wrapperAdd.append(input);
input.type="text";
                // Кнопка добавления задачи
const buttonAdd=document.createElement("button");
wrapperAdd.append(buttonAdd);
buttonAdd.textContent="Добавить"
buttonAdd.className = "buttonAdd";
            //Список
const list=document.createElement("ul")
content.append(list);
list.className = "list";

                //Обертка элемента списка
const wrapperListItem=document.createElement("wrapper");
list.append(wrapperListItem);
wrapperListItem.className = "wrapperListItem";

const listItem=document.createElement("li");
wrapperListItem.append(listItem);
listItem.textContent="Купить продукты";






















