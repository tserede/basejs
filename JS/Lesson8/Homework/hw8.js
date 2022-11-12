// // 1
// const Arrow=['Белеет','парус','одинокий','в','тумане','моря','голубом'];
// let mapArr=Arrow.map((e)=>e.length);
// console.log(mapArr);


// // 2 не решила
// const currentSums=(numbers)=>{
//     let arrSum=[];
//     for(let i=0;i<=numbers.length;i++){
//         let a=numbers.reduce((accum,numbers[i])=>accum+numbers[i]);
//         arrSum.push(a);
//     }
// }
// console.log(currentSums([2,3,5,7,11,13,17,19]));


// //3
// const arr=[0,1,2,3,4,5,6,7,8,9];
// const sumSeven=(arr)=>{
//     const result=[];
//     for(let i of arr){
//         for(let j of arr){
//             if(i+j===7&&!result.includes(`${i}:${j}`)){
//             result.push(`${i}:${j}`);
//         }
//     }
// }
// return result;
// }
// console.log(sumSeven(arr));
// //4
// const str="Белеет парус одинокий в тумане моря голубом";
// const Arrow=str.split(" ");
// let newArr=[];
// for(let i=0;i<=Arrow.length-1;i++){
//  let a=String(Arrow[i]);
//  newArr.push(a[0]);
// }
// console.log(newArr);


// //5
// const str='Hello world';
// let Arrow=str.split("");
// let newArr=[];
// for(let i=0;i<=str.length-1;i++){
    
//     if(Arrow[i-1]===undefined){
//         Arrow[i-1]='';
//     }
//     if(Arrow[i+1]===undefined){
//         Arrow[i+1]=''
//     }
//     let a=String(Arrow[i-1])+String(Arrow[i]+String(Arrow[i+1]));
//     newArr.push(a);
// }
// console.log(newArr);

// //вариант 2
// const massThreeLet = (str) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//       arr.push(str.substring(i-1,i+2));
//     }
//     return arr;
//   };


// //6
// const arrow=[5,9,3,6,1,12,2,4,7];
// arrow.sort((a,b)=>a-b);
// arrow.reverse();
// console.log(arrow);


// //7
// const arr1=[44,65,3];
// const arr2=[55,12,89];
// const arr3=[5,78,34];
// let arr=[...arr1,...arr2,...arr3]
// let newArr=arr.sort((a,b)=>a-b).reverse().join(" ").split();
// console.log(newArr);


// // //8 Дан двухмерный массив с числами, 
// // например . 
// // Найдите сумму элементов этого массива.
// //  Массив, конечно же, может быть произвольным.
// const arr=[[1, 2, 3], [4, 5], [6]];
// let sum=arr.flat(Infinity).reduce((a,b)=>a+b);
// console.log(sum);



// //9 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
//dfhbfyn 1
// const arr=[7,9,11,6,3,7]
// let newArr=[];
// for(let i=arr.length-1; i>=0; i--){
//  newArr.push(arr[i]);
// }
// console.log(newArr);

// //вариант 2
//  const arr=[7,9,11,6,3,7];
//  let newArr=[];
//  arr.map((e)=>newArr.unshift(e));
//  console.log(newArr);

// //10 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
//  чтобы в сумме получилось больше 10-ти.
// // вариант 1
// const arr=[1,2,3,4,5,6,7,8];
// let a=0;
// let sum=0;
// for(let i=0;i<=arr.length-1;i++){
//     if(sum<=10){
//         sum+=arr[i];
//         a+=1;
//     }
// }
// console.log(a);
// // //  вариант 2
// const arr=[1,2,3,4,5,6,7,8];
// let a=0;
// let sum=0;
// for(let value of arr){
//     if(sum<=10){
//         sum+=value;
//         a+=1;
//     }}
//     console.log(a)

// // вариант 3
// const arr = [10, 2, 3, 4, -5, 6, 7, 8, 9];

// const sumMoreTen = (arr) => {
//   let lastIndex;
//   arr.reduce((prev, cur, index) => {
//     if (prev + cur <= 10) {
//       lastIndex = index;
//       return prev + cur;
//     }
//   }, 0);

//   if (lastIndex === 0) {
//     return lastIndex + 1;
//   }
//   if (typeof lastIndex === "undefined") {
//     return 1;
//   }
//   return lastIndex + 2;
// };

// console.log(sumMoreTen(arr));

// // 11
// const arrayFill=(a,b)=>{
//     let arr=[]
//     for(let i=0;i<=b-1;i++){
//         arr.push(a);
//     }
//     console.log(arr);
// }
// arrayFill('y',9);






