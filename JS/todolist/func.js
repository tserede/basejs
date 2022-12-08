
 export const createList=()=>{
    const itemArr=["Купить игрушки", "Нарядить елку","Повесить гирлянду"];
    for(let val of itemArr){
        const listItem=document.createElement("li");
        const list=document.getElementById("list")
        listItem.textContent=val;
        list.append(listItem);
        listItem.className="li"
        console.log(listItem.textContent);
    }
};

export const themeToggle=function(){
    const themeBtn=document.getElementById("theme_button");
    const body=document.body;
    body.classList.toggle("light_theme");
    if(body.classList.contains("light_theme")){
        themeBtn.textContent="Темная тема";
    } else{
        themeBtn.textContent="Светлая тема";
    }
    
 };


 

