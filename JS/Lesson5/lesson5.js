// function showMessage(message){
//     console.log(message);
// }
// showMessage("Hi");
// showMessage("Hello");
// showMessage("Привет");
// showMessage("Как дела?");
// function sum(a,b=0){
//     return a+b;

// }
// const result=sum(3,5);
// console.log(result);
// console.log(sum(4,6));
// function positiveSum(a,b){
//     if(a>0&&b>0){
//         return a+b;
//     } return "Ошибка вычисления"
// }
// console.log(positiveSum(2,3));
// const name="Alex";
// function sayHello(message="Hello"){
//     console.log(`${message}-${name}!!`);
// }

// sayHello("Привет");
// let a=0;
// function sum(b){
//     const result=a+b;
//     a+=1;
//     console.log(result);

// }
// sum(2);
// sum(4);
// sum(10);

// function sayHi(UserName="Гость"){
//    console.log(`Hello ${UserName}`);
// }
// sayHi("Ivan");
// sayHi("");

// sayHi();
// const getName=(name)=>`Name-${name}`;
// console.log(getName("Alex"));
// console.log(getName("Ivan"));

// const getNameTwo=(name)=>{
//     return `Name-${name}`
// };
//  const quadro=a=>a**2;
//  console.log(quadro(3));
const showString = (string, N) => {
  for (i = 0; i < N; i++) {
    console.log(string);
  }
};
showString("Строка", 5);
showString("Привет", 2);
