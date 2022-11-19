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



function CreateUser(userName, userAge){
    this.name=userName;
    this.age=userAge;
}
const firstUser=new CreateUser("Alex", 26);
const secondUser=new CreateUser("Tony", 24);
const thirdUser=new CreateUser("Ivan", 15);
console.log(firstUser,secondUser,thirdUser);




 