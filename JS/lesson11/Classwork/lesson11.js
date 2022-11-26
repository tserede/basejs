// console.log("script init");
// console.log(window.location);
// const addButton=document.getElementById("add_button");

// addButton.textContent="Создать новый элемент"
// console.log(addButton);
// const buttonsCol=document.getElementsByTagName("button");
// console.log(buttonsCol[0]);
// const listItem=document.querySelector("li+.active");
// const listItems=document.querySelectorAll(".list_item");
// console.log(listItem,listItems);
// const header=document.querySelector("<h3>NEW TITLE</h3>");
// console.log(header.innerHTML);
// const footer=document.querySelector("footer");
// footer.outerHTML="<div class='footer'><p>HELLO FOOTER</p></div>";
// const addButton=document.getElementById("add_button");
// addButton.style.color="red";
// addButton.style.width="400px";
// const list=document.querySelector("ul");
// list.classList.add("active");
// console.log(list.classNameName);
// const newListItem=document.createElement("li");
// newListItem.className="list_item";
// newListItem.textContent="New Element";
// console.log(newListItem);
// const list=document.querySelector("ul");
// list.append(newListItem);

//  const themeBtn=document.getElementById("theme_button");
//  const first=function(){
//     console.log("Hello world");
//  };

//  const second=function(){
//     console.log("Bye world");
//  };

//  themeBtn.onclick=first;
//  themeBtn.onclick=second;
// // themeBtn.onclick=function(){
// //     first();
// //     second();   
// //     };
//     themeBtn.addEventListener("click",first);
//     themeBtn.addEventListener("click",second);
//     themeBtn.removeEventListener("click",second);


// const themeBtn=document.getElementById("theme_button");
//  const themeToggle=function(){
//     const body=document.body;
//     body.classList.toggle("light_theme");
//     if(body.classList.contains("light_theme")){
//         themeBtn.textContent="Темная тема";
//     } else{
//         themeBtn.textContent="Светлая тема";
//     }
    
//  };
//  themeBtn.addEventListener("click",themeToggle);
 const content=document.querySelector(".content");
 content.addEventListener("click",()=>console.log("content"));
 const list =document.querySelector(".list");
 list.addEventListener("click",()=>console.log("list"));
 const listItem=document.querySelectorAll(".list_item");
 for(let item of listItem){
    item.addEventListener("click",()=>console.log("list_item")); 
 }




