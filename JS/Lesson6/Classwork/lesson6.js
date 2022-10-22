// const key="FirstName";
// const person={
// [key]:"Alex",
// sayHello: function(){
//     console.log("Привет,Я-Alex")
// }
// };
// person.age=56;
// person['city-name']="NN";
// person[4]=4;
// // console.log(person.FirstName);
// // console.log(person["city-name"]);
// // console.log(person.age);
// // person.age=26;
// // console.log(person.age);
// // console.log(person.height);
// // person.height=180;
// // console.log(person.height);
// // delete person.age;
// // console.log(person.age);
// person.sayHello();

// const sayHello=function(){
//     console.log("Привет,я Alex");
// };
// person.sayHello=sayHello;
// person.sayHello();
// const myFavoriteFilm={
//     filmName:"Polianna",
//     releaseDate: "2003",
//     nameDirector: "Сара Хардинг",
//     country: "Великобритания",
//   sayFilmName: function(){
//     console.log(myFavoriteFilm.filmName);
   
//   }
//     }

// myFavoriteFilm.filmRevenue="4,15 млн.руб";
// console.log(myFavoriteFilm);
// delete myFavoriteFilm.releaseDate;
// console.log(myFavoriteFilm.releaseDate);
// myFavoriteFilm.sayFilmName();

// const number=100;
// console.log(typeof number.toString());
// const str="Hello World";
// str[0]="H";
// console.log(str[0]);
//Задача 1
const isUpperCase=(str,i)=>{
    if(i>str.lenght){
        return"Ошибка такого индекса нет";
    }
    if(str[i]==str[i].isUpperCase){
        return true;
    }  return false;
};
console.log(isUpperCase("AbcdEGRT",90))




