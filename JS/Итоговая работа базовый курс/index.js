const body=document.body
const wrapper=document.createElement("div");
body.append(wrapper);
wrapper.className="wrapper";
console.log(wrapper);

// header
const newHeader=document.createElement("header")
newHeader.className="header";
wrapper.append(newHeader);
newHeader.style.color ='red';


const newTitle=document.createElement("h1");
newHeader.append(newTitle);
newTitle.textContent="TO DO LIST";
newTitle.style.color="red";






