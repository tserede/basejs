// /*Задача 1*/
// function quadro(a,b=2){
//     return a**b;
// }
// console.log(quadro(4));
// /*Задача 2*/
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,5));
// /*Задача 3*/
// function result(a,b,c){
//     return (a-b)/c;
// }
// console.log(result(24,9,5));
// /*Задача 4*/
// function dayWeek(day){
//     // let day=5;
//     if (day==1){
//         console.log("Понедельник");
//     }else if(day==2){
//         console.log("Вторник");
// }else if(day==3){
//     console.log("Среда");
// }else if(day==4){
//     console.log("Четверг");
// }else if(day==5){
//     console.log("Пятница");
// }else if(day==6){
//     console.log("Суббота");
// } else if(day==7){
//     console.log("Воскресенье");
// } }
// dayWeek(4);
// /*Задача 5*/
// function fun(a,b){
//     if (a===b){console.log("true");}
//     else { console.log("false");}
// }
// fun(5,5);
// /*Задача 6*/
// function fun(a,b){
//     if((a+b)>10){
//         console.log("true");
//     } else console.log("false");
// }
// fun(6,5);
// /*Задача 7*/
// function num(a){
//     if(a<0){ console.log("true");
// }else console.log("false");
// }
// num(-6);
// /*Задача 8*/
// function isNumberRange(a) {
//   if (a > 0 && a < 10) {
//     return true;
//   } else return false;
// }
// /*Задача 9*/
// let arr=[5,76,44,9,2,7,9];
// let arrResult=[];
// for(i=0;i<arr.length; i++){
//   if (isNumberRange(arr[i])===true){
//     arrResult.push(arr[i]);
//   }
// }
// console.log(arrResult);

// /*Задача 10*/
// function getDigitsSum(num){
//   const str=`${num}`;
//   let result=0;
// for(let i=0; i<str.length; i+=1){
//  result+=+str[i];
// } return result;
// }
// console.log(getDigitsSum(567));
/*Задача 10*/
// let getDigitsSum = (num) => {
//   const str=`${num}`;
//   let result=0;
//   for(let i=0; i<str.length; i+=1){
//     result+=+str[i];// = быстро переводит строку в число
//      }   return result;
//  }
// console.log(getDigitsSum(678));
// /*Задача11*/
// function filterYears(){
//   let result=[];
//    for(let i=1; i<=2020; i++){
//     if(getDigitsSum(i)===13){
//       result.push(i);
//     }
//   }
//   return result;
// } ;
// console.log(filterYears());
// /*Задача 11*/
// const filterYears=()=>{
//   let result=[];
//   for(let i=1; i<=2020; i+=1){
//   if(getDigitsSum(i)===13){
//     result.push(i);
//   }
// }
// return result;
// } ;
// console.log(filterYears());
// /*Задача 12*/
// const isEven=(a)=>{
//   if(a%2===0){
//     return true;
//   }
//   // else { console.log(false);}
//   };

// // console.log(isEven(10));
// // isEven(15);
// /*Задача 13*/
// function filterDigit(){
// let arr=[5,5,8,3,9,46,27,54,96,77];
// let result=[];

// for(i=0; i<arr.length; i++){

//     if(isEven(arr[i])===true){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(filterDigit());
// /*Задача 14*/
// const getDivisors=(a)=>{
//   let result=[];
//   for(let i=0; i<=a; i++){
//     if(a%i===0){
//       result.push(i);
//     }
//   }
//     console.log(result);
// }
// getDivisors(10);
/*Задача 15*/
let sumDigit = (num) => {
  const str = `${num}`;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += +str[i];
    if(result<9){
      return result;
    }
  }
}

console.log(sumDigit(567));

