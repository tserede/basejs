// let a=30; b=155; c=67;
// if (a<b){
//   if(b>c){
//     console.log("b самый большой");
//   } }
//   else if(a<c){
//     console.log("c самый большой");
//   }
// else {
//     console.log("a самый большой");
// }
/*Задача 1*/
// let a=-3
// if(a == 0){
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// /* Задача 2 */
// if(a>0){
//   console.log("Верно");
// } else { console.log ("Неверно");
// }
// /* Задача 3 */

// if(a<0){
//   console.log("Верно");
// } else {
//   console.log ("Неверно");
// }
// /* Зaдача 4 */

// if (a>=0) {
//   console.log("Верно");
// } else {
//   console.log ("Неверно")
// }
// /* Задача 5 */

// if (a<=0){
//   console.log("Верно");
// }
// else{
//   console.log("Неверно");
// }
// /* Задача 6 */
// if(a!=0){
//   console.log("Верно");
// }
// else {
//   console.log ("Неверно");
// }
// /* Задача 7 */
// if(a=="test"){
//   console.log ("Верно");
// }
// else { console.log("Неверно")
// }
// /* Задача 8 */
// if (a===1){
//   console.log ("Верно");
// } else {
//   console.log("Неверно");
// }
// /*Работа с логическими переменными*/
// /* Задача 1*/
// // let test=false;
// // if (test==true){
// //   console.log("Верно");
// // }
// // else {console.log("Неверно");
// // }
//  let test=true?console.log("Верно"):console.log("Неверно");
//  /*Задача 2*/
//  let test=true
//  if(test!=true) {
//   console.log("Верно");
//  } else {
//   console.log ("Неверно");
//  }
// let test=false?console.log("Верно"):console.log("Неверно");
/* Работа с && и ||*/
/*Задача 1*/
// let a=5;
// if(a>0 && a<5) {
//   console.log("Верно");
// } else{ console.log ("Неверно");
// }
/*Задача 2*/
// let a=-3;
// if (a==0||a==2){
//   a=a+7;
// } else {
//   a=a/7;
// }
// console.log(a);
/*Задача 3 */
// let a=3; b=5;
// if(a<=1 && b>=3) {
//   console.log(a+b);
// } else {
//   console.log(a-b);
// }
/*Задача 4*/
// let a=0; b=9;
// if (a>2&&a<11||b>=6&&b<14){
//   console.log("Верно");
// } else {console.log ("Неверно");
// }
/*На switch-case*/
// let num = 5;
// switch (num) {
//   case 1:
//     result = "Зима";
//   case 2:
//     result = "Весна";
//   case 3:
//     result = "Лето";
//   case 4:
//     result = "Осень";
//     default:
//         result="Нет таких значений";
// }
// console.log(result);
// /*Общие задачи */
// /*Задачи 1*/
// let day = 200;
// if (day >= 1 && day <= 10) {
//   console.log("Первая декада месяца");
// } else if (day > 10 && day <= 20) {
//   console.log("Вторая декада месяца");
// } else if (day > 20 && day < +31) {
//   console.log("Третья декада месяца");
// } else {
//   console.log("Значение указано неверно");
// }
// /* Задача 2*/
// let month=12
// if (month==1||month==2||month==12){
//     console.log("Зима");
// } else if(month>=3&&month<=5){
//     console.log("Весна");
// } else if (month>=6&&month<=8){
//     console.log("Лето");
// }else if(month>=9&& month<=11){
//     console.log("Осень");
// } else {
//     console.log("Значение не верное");
// }
// /*Задача 3*/
// let str = "abcde";
// if (str[0] == "a") {
//   console.log("Да");
// } else {
//   console.log("Нет");
// }
// /* Задача 4*/
// let str="12345";
// if(str[0]>=1&&str[0]<=3){
//     console.log("Да");
// } else {console.log ("Нет");
// }
// /*Задача 5*/
// let str="458";
// a=Number(str[0]); b=Number(str[1]); c=Number(str[2]);
// console.log(sum=a+b+c);
// /*Задача 6*/
// let str="474487";
// let sum1=Number(str[0])+Number(str[1])+Number(str[2]);
// let sum2=Number(str[3])+Number(str[4])+Number(str[5]);
// if (sum1==sum2){
//     console.log ("Да");
// } else {console.log ("Нет");}
/*Циклы while и for*/
// /*Задача 1*/
// let a=1;
// while(a<101){
//     console.log(a);
//     a=a+1;
// }
// for(let i=1; i<=100;i++){
//     console.log(i);
// }
// /*Задача 2*/
// let a=11;
// while (a<=33){
//     console.log(a);
//     a=a+1;
// }
// for(let i=11;i<=33; i++){
//     console.log(i);
// }
// /*Задача 3*/
// let a=0
// while(a<=100){
//     if(a%2==0){
//             console.log(a);
//     }
//         a=a+1;
//     }
// for(let a=0; a<=100; a++){
//     if(a%2==0){
//         console.log(a);
//     }
// }
// /*Задача 4*/
// let a=1;
// let sum=0;
// while(a<=100){
//     sum=sum+a;
//     a=a+1;
// }
// console.log(sum);
// let sum=0;
// for(a=1;a<=100;a++){
//    sm=sum+a;
// }
// console.log(sum);
/*Работа с for для массивов */
// /*Задача 1*/
// let arr=[1,2,3,4,5];

// for (let i=0; i<arr.length;i++){
// console.log(arr[i]);
// }
/* Задача 2*/
// let arr=[1,2,3,4,5];
// let sum=0
// for(let a=0;a<arr.length; a++){
//     sum=sum+arr[a];
// }
// console.log(sum);
/*Задачи общие*/
// /*Задача 1*/
// let arr=[2,5,9,15,0,4];
// for(let i=0; i<arr.length;i++){
//     if(arr[i]>3&&arr[i]<10){
//         console.log(arr[i]);
//     }
// }
// /*Звдача 2*/
// let arr=[7,7,-3,5,3,-1,-9,5];
// let sum=0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>=0){
//         sum=sum+arr[i];

//     }
// } console.log(sum);

// /*Задача 3*/
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log("Есть!");
//     break;
//   }
// }
// /*Задача 4*/
// let arr=[10,20,30,50,235,3000];
// for(let i=0;i<arr.length; i++){
//     let str=String(arr[i]);
//     if(str[0]==1||str[0]==5||str[0]==2){
//         console.log(arr[i]);
//     }
// }
// /*Задача 5*/
// let arr=[1,2,3,4,5,6,7,8,9];
// result="-";
// for(let i=0;i<arr.length;i++){
//  result+=String(arr[i])+"-"
// } 
// console.log(result);
/*Задача 6*/
let n=1000;
i=0
while(n>50){
    n=n/2;
    i=i+1;
}
console.log(`Результат ${n}.Количество итераций ${i}`);
