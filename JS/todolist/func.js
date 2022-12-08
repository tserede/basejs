
const createList=()=>{
    const itemArr=["Купить игрушки", "Нарядить елку","Повесить гирлянду"];
    for(let val of itemArr){
        const listItem=document.createElement("li");
        listItem.textContent=val;
        list.append(listItem);
        listItem.className="li"
        console.log(listItem.textContent);
    }
};

// createList();
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

//  const btnAdd=document.getElementById("buttonAdd");
//  function createListItem(){
//     const newListItem=document.createElement("li");
//     newListItem.className="li";
//     newListItem.textContent=input.value;
//     list.append(newListItem)
    
//  }
//  btnAdd.addEventListener("click",createListItem)
 

