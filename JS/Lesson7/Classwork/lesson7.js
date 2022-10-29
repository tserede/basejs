// const names=['Alex','Ivan','Tony','Petr'];
// const findElem=names.find((el)=>el==='Tony');
// console.log(findElem);

// const names=[{name:'Alex'},{name:'Ivan'},{name:'Tony'},{name:'Petr'}];
// const findElem=names.find((el)=>el.name==='Tony');
// console.log(findElem);

// const names=[{name:'Alex'},{name:'Ivan'},{name:'Tony'},{name:'Petr'}];
// const filterArr=names.filter(
//     (el,i)=>(el.name==="Tony"||el.name==="Alex")&&i!==0
//     );
// console.log(filterArr);


// const names=[{name:'Alex'},{name:'Ivan'},{name:'Tony'},{name:'Petr'}];
// const mapArr=names.map((el)=>el.name)
// console.log(mapArr);


// const names=[{name:'Alex'},{name:'Ivan'},{name:'Tony'},{name:'Petr'}];
// const mapArr=names.map((el)=>({name:el.name, handCout:2}));
// console.log(mapArr);

// const names=[{name:'Alex'},{name:'Ivan'},{name:'Tony'},{name:'Petr'}];
// const arr=names.forEach((el)=>(el.name="Unknown"));
// console.log(arr);
// console.log(names);

// const names=[{name:'Alex'},{name:'Ivan'},{name:'Tony'},{name:'Petr'}];
// console.log(names);
// const arr=names.map(()=>({name: "Unknown"}));
// console.log(arr);
// console.log(names);

// const arr=[1,2,5,6,19,28,56];
// const result=arr.reduce((prev,cur)=>{
//     if(cur>0){
//         return prev+cur;
//     }
//     return prev;
// });
// console.log(result);


// //Практика задача 1
// const arr=[5,9,-33,-6,4,7,-9];
// let filterArr=arr.filter((e)=>e>=0);
// let result=filterArr.reduce((prev,cur)=>prev+cur);
// console.log(result);


// const positiveEvenSum=(arr)=>{
//     const result=arr.reduce((prev,cur)=>{
//         if (cur%2===0&&cur>0){
//             return prev+cur;
//         }
//         return prev;
//     },0);
//     return result;
// }
// console.log(positiveEvenSum([1,2,-3,-4,5,6]));
// variant2
// const positiveEvenSum=(arr)=>
// arr.filter((el)=>el>0&&el%2===0).reduce((prev,cur)=>prev+cur);
// console.log(positiveEvenSum([1,2,-3,-4,5,-6]));

// // // Практика задача 2
//  const arrow=[1,2,1,3,4,5,2,3];
//  let findArr=[];
//  for(let i=0; i<findArr.length; i++){
//     if (arr.includes(arrow[i], 0)!==true){
//         findArr.push(arrow[i]);
//     }
//  return findArr;
//  }
//  console.log(findArr);

//  const arrow=[1,2,1,3,4,5,2,3];
// function uniqArrItem(itemArray){
//     const result=[];
//     for(let i=0; i<itemArray.length; i++){
//         if(!result.includes(itemArray[i])){
//         result.push(itemArray[i]);
//         }
//     }
//     return result;
// }
// const uniqResult=uniqArrItem([1,2,1,3,4,5,2,3]);
// const uniqResult2=uniqArrItem([1,1,1,1,1,1,1,1]);
// const uniqResult3=uniqArrItem([1,44,666,778,9999,4563]);

// console.log(uniqResult);
// console.log(uniqResult2);
// console.log(uniqResult);
function uniqArrItem(arr){
return arr.filter(function(el,i){
return !arr.includes(el,i+1);
});
}
// const uniqArrItem=(arr)=>arr.filter((el,i,array)=>!array.includes(el,i+1));
const uniqResult=uniqArrItem([1,2,1,3,4,5,2,3]);
console.log(uniqResult);