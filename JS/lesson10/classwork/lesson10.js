// const cubeValue=(a)=>{
//     const a=10;
//     return (b,c)=>{
//         return a*b*c;
//     }; 
// };
// const first=cubeValue();
// console.log(first(10,10));
// console.log(first(2,5));
// console.log(first(5,7));

// const second =cubeValue(4);
// console.log(first(10,10));
// console.log(first(2,5));
// console.log(first(5,7));



// const cubeValue=(a,b,c)=>a*b*c;
// console.log(cubeValue(1,3,3));

// const cubeCaryValue=(a)=>{
//     return (b)=>{
//         return (c)=>{
//             return a*b*c;

            
//         }
//     }
// }
// console.log(cubeCaryValue(1)(3)(3));
// const twoArgs=cubeCaryValue(1)(3);
// console.log(twoArgs(3));
// console.log(twoArgs(4));
// console.log(twoArgs(5));



// const cubeCaryValueVar2=(a)=>(b)=>(c)=>a*b*c;
// console.log(cubeCaryValueVar2(1,3,3));


// // дз
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//    }
   
//    let user = {
//     name: 'Вася',
   
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
   
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
   
//    };
//    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));






// // 5
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//    }
   
//    let user = {
//     name: 'John',
   
//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//    };
//    askPassword(user.login.bind(user,true),user.login.bind(user,false));
   

// //6
// const elem = {value: ‘Привет’}

// function func(surname, name) {
// alert(`${this.value},${surname},${name}`);
// }
// const helloFunc=func=func.bind(elem);
// helloFunc("Петров",'Петр');
// helloFunc("Иванов", 'Иван');


// Функции конструкторы
// function CreateUser(userName, userAge){
//     this.name=userName;
//     this.age=userAge;
//     this.sayHi=function(){
//         console.log(`Привет, меня зовут ${this.name}`);
//     }
// }
// const firstUser=new CreateUser("Alex", 26);
// const secondUser=new CreateUser("Tony", 24);
// const thirdUser=new CreateUser("Ivan", 15);
// console.log(firstUser,secondUser,thirdUser);


// secondUser.sayHi();

// Задача
// Реализовать функцию конструктор для создания открыток. Функция должна создавать 
// объект открытки со свойствами from, to и метод show(). Метод должен возвращать 
// строку в которой будут указаны значения свойств  from и to.
// Добавить в prototype создаваемого объекта метод заменяющий текущее значение  
// свойства from на новое переданное значение.

function PostCard(from, to){
 this.from=from;
 this.to=to;
 this.show=function(){
    console.log(`Открытка из ${this.from} в ${this.to}`)
 }
}
PostCard.prototype.setFrom=function(from){
    this.from=from;
}

const firstPostcard=new PostCard("London","Berlin");
const secondPostcard=new PostCard("NN","Moscow");

firstPostcard.show();
secondPostcard.show();
firstPostcard.setFrom(Paris);
firstPostcard.show();


// class People{
//     constructor(name,surName){
//         this.name=name;
//         this.surName=surName;
//     }
//     getFullName(){
//         return `${this.name}:${this.surName}`;
//     }
// }
// const firstPeople = new People("Alex","Ivanov");
// console.log(firstPeople.getFullName());

// class Worker extends People{
//     constructor(name,surName,rate,day){
//         super(name,surName)
//         this.day=day;
//         this.rate=rate;
//     }


// getSallary(){
//     return `${this.getFullName()} получил ${this.rate*this.day}`;
// }
// }
// const firstWorker=new Worker("Alex","Petrov",500,20)
// const secondWorker=new Worker("Alex","Petrov",500,20)

// console.log(firstWorker.getSallary()) ;
// console.log(secondWorker.getSallary()) ;
