// if (true){
//     console.log ("true");
// }
// if (false) {
//     console.log ("false");
// }
// const name="Alex3";
// if(name==="Ivan"){
//     console.log ( `Привет ${name}`);
// }
// else if (name==="Alex") {
//     console.log (`Привет друг ${name}`);
// }
// else if (name==="Petr"){
//     console.log(`Hi ${name}`);
// }
// else {
//     console.log("Привет незнакомец");
// }
// if(true){
//     if(1){
//         console.log("true");
//     }
// else{
//     console.log("false");
// }
// else {
//     console.log ("false");
// }
// }
// const UserName='Alex4';
// const result=UserName === 'Alex' ? "Hello Alex" : "Hello User";
// console.log(result);/**
//  Задача
// const a = 1,
//   b = 2,
//   c = 3;
// if (a > b) {
//   if (a > c) {
//     console.log(a);
//   }
// else {
//     console.log(c);
//   }
//   else
//   { if (a < b) {
//     if (c < b) {
//       console.log(b);
//     }}}
//      else {
//       console.log(c);
//     } конец задачи
const t = 40;
if (t <= -30) {
  console.log("Оставайтесь дома!");
} else if (t > -30 && t <= -10) {
  console.log("Сегодня холодно");
} else if (t > -10 && t <= 5) {
  console.log("Не холодно");
} else if (t>5&&t<=15) {
    confirm.log ("Тепло");
} else if (t>15&&t<=25) {
    console.log("Очень тепло");
} else {
    console.log ("Пекло");
}