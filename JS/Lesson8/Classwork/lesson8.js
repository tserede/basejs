// function compArr(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     } else
//       for (let i = 0; i < arr1.length;i++ ) {
//         if (arr1[i] !== arr2[i]) {
//           return false;
//         } 
//         }
//         return true;
//       }
//   console.log(compArr([2, 4, 2, 4, 1,5], [2, 4, 2, 4, 1,5]));
// const compareArray=(arr1,arr2)=>{
//     const str1=arr1.toString();
//     const str2=arr2.toString();
//     if(str1.length===str2.length){
//         return str1===str2;
//     }
//     return false;
// }
// console.log(compareArray([2, 4, 2, 4, 1,9], [2, 4, 2, 4, 1,5]));
//Задача. 
// const multiArr=[1,2,[3,4,5,[6,7,8]],9,10,[11,12,[13,14,[15]]]] //Задача на дом .Можно решить через рекурсию. Задача с собеседований
// const firstTry=(arr)=>arr.toString().split(",").map((el)=>+el);
// console.log(firstTry(multiArr));
// // Решение 2
// const thirdTry=(arr)=>{
//     let haveArr=false;
//     for(let i=0;i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//        haveArr=true;
//     }
// }
// if(haveArr){
//     return thirdTry(arr.flat());
// }
// return arr;
// }
// console.log(thirdTry([1,2,[3,4,5,[6,7,8]],9,10,[11,12,[13,14,[15]]]]))
// Решение 3


// Новая тема
// const number=1;
// const increment=(a)=>{
//     a+=1; 
// };
// console.log(number,"one");
// increment(number);
// console.log(number,"two");


// const arr=[1,2,3,4];
// const ArrPush=(arr)=>{
//     arr.push(5);
// }
// console.log(arr,"one");
// ArrPush(arr);
// console.log(arr,"two"); // тут не так как с примитивамиб массив новый будет с 5,так как объекты копируются по ссылке, это ссылочный тип данных. А примитивы копируются по значению

// const user={name: "Alex"};
// const user2=user;
// user.age=18;
// user2.name="Ivan";
// console.log(user);
// console.log(user2); 



// const user={name: "Alex"};
// const user2=Object.assign({},user, {favoriteColor: "red"},{city: "London"});
// user.age=18;
// user2.name="Ivan";
// console.log(user);
// console.log(user2); 


// const arr=[1,2,3,4];
// const ArrPush=(arr)=>{
//     const arrNew=[...arr];
//     arrNew.push(5);
//     console.log(arrNew);
// }
// console.log(arr,"one");
// ArrPush(arr);
// console.log(arr,"two");

// const user={name: "Alex", age:18};
// const user2=JSON.parse(JSON.stringify(user));
// user.name="Ivan";
// user2.age=20;
// console.log(user);
// console.log(user2);

// const infinitySum=(...args)=>{
//     return args.reduce((prev,cur)=>prev+cur,0);
// }
// console.log(infinitySum(1,23,5));


// const infinitySum=(a,b,...args)=>{
//     return a+b+args.reduce((accum,cur)=>accum+cur,0);
// }
// console.log(infinitySum(1,23));

// const user={name: "Alex", age: 18, city: "London"};

// const userName=user.name;
// console.log(userName,"userName");
// const {name}=user;
// console.log(name, "name");

// const arraySum=(arr)=>{
//     let result=0;
//     for(let value of arr){
//         result+=value;
//     }
//     return result;

// }
// console.log(arraySum([1,2,3,4,5,6,7,8]));


// const arr=["Ivan","Alex","Tony"];
// const obj={name: "Ivan", age:18};
// for(let value in arr){
//     console.log(value)
// }


// Практика
// // Задача 1
// let user1={name: "Ivan", age: 18};
// const user2=Object.assign({favouriteColor: "blue"}, user1);
// user2.city="NN";
// let user3={...user1};
// user3.country="RF";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// // Задача 2
// const evenSum=(...args)=>{
//     let result=0
// for(let value of args){
//     if(value%2===0){
//         result+=value;
//     }

// }
// return result;
// }
// console.log(evenSum(6,9,6));

// // Задача 3
// const filterArrow=(arr1,arr2)=>{
//     let result=[];
//     for(let value of arr1){
//         if(arr2.includes(value)){
//             result.push(value);
//         }
//     }
//     return result;
// }
// console.log(filterArrow([1,4,5,3,9],[3,44,9,0]))









