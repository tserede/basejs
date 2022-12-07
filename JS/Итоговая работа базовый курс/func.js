
const createList=()=>{
    const itemArr=["Купить игрушки", "Нарядить елку","Повесить гирлянду"];
    for(let val of itemArr){
        const listItem=document.createElement("li");
        listItem.textContent=val;
        wrapperListItem.append(listItem);
        listItem.className="li";
        listItem.style.fontSize="25px"
        listItem.style.margin="15px"
        console.log(listItem.textContent);
    }
};
createList();