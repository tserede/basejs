// //Задача 1
//const stringToarroy=(str)=>{
//   arr=str.split(" ");
//     console.log(arr);
//}
// stringToarroy("Буря мглою небо кроет");
// //Задача 2
// const deleteCharacters=(str,length)=>{
//     console.log(str.slice(0,length));
// }
// deleteCharacters("Белеет парус одинокий",5);
// // Задача 3
// const insertDash=(str)=>{
//     str=str.toUpperCase();
//     arr=str.split(" ");
//     console.log(arr.join("-"));
     
// };
// insertDash("Отворите мне темницу");
// // Задача 4
//const StructStr=(str)=>{
//    console.log(str[0].toUpperCase()+str.substr(1,str.length));
//}
// StructStr("слово");
// Задача 5
const capitalize=(str)=>{
    let arr=str.split(" ");
    let arrowStr=[];
    for(let i=0;i<arr.lenght;i++){
       let a=arr[i]
       let b=a[0].toUpperCase()+a.substr(1,a.length);
       arrowStr.push(b);
    
 }
 return arrowStr;

};
console.log(capitalize("Белеет парус одинокий"));
// //7
// const charArr=[".",",","-","/","!","&","?","*"];
// const removeChar=(str)=>{
//     for(let i=0; i<charArr.length; i++){
//         while(str.includes(charArr[i])){
//           str=str.replace(charArr[i],"");
//         }
//         }
//         let result="";
//         for(let i=0; i<str.length;i++){
//             if(str[i])==""&&str[i-1]!==""){
//                 result+=str[i];
//             }
//             if(str[i]!=""){
//                 result+=str[i];
//             }
//         }
//     return str;
//     }
// console.log(removeChar("vjjsd7&@%?fsffgvs.,"));
//var2
// const removeChar=(str)=>{
//     let result="";
//     for(let i=0; i<str.length;i++){
//         if(/[a-zA-Z]|[а-яА-Я]|[0-9]|\s/.test(str[i])){
//             result +=str[i];
//         }
//     }
//     return result;
// };
// console.log(removeChar("vjjsd7&@%?fsffgvs.,"));
// 12
// const camelCase="CurrentUserSecondName";
// const initSnake=(str)=>{
//     let result="";
//     for(let i=0; i<str.lenght; i++){
//         if(str[i].toUpperCase===str[i]&&i!==0){
//             result+=`_${str[i].toLowerCase()}`;
//         } else{
//             result+=str[i].toLowerCase();
//         }
//     }
//     return result;
// }
// console.log(initSnake("CurrentUserSecondName"));
// //16
// const getSubstr=(str,char,pos)=>{
//     if(str.includes(char)){
// if(pos==="before"){
// return str.slice(0,str.indexOf(char));
// }
// if(pos==="after"){
//     return str.slice(str.indexOf(char));


// }
//     }
//     return `Символ ${char} отсутствует в строке ${str}`;
// };
// console.log(getSubstr("My name Alex!", "b", "after"));