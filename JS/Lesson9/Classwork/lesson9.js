// console.log(this);

// function test(){
//     console.log(this);
// }
// test();

// const town = {
//     name: "Moscow",
//     population: "25 mln",
//     getName: function () {
//       console.log(this.name);
//       return this.name;
//     },
//     getPopulation: function () {
//       console.log(this.population);
//       return this.population;
//     },
  
//     setAnyValue: function (key, value) {
//       this[key] = value;
//     },
//   };
  
//   town.getName();
//   town.setAnyValue("name", "London");
//   town.setAnyValue("country", "UK");
//   town.getName();
  
//   console.log(town);


// const user1={name:"Vasya", surName: "Ivanov"};
// const user2={name:"Petya", surName: "Semenov"};
// const user3={name:"Alex"};
// function greeting(phrase,smile){
//     console.log(`${this.name} ${this.surName}:${phrase}:${smile}`);
// }
// greeting.call(user1,"Привет", "^_^");
// greeting.call(user2,"Hello", "*_*");
// greeting.call(user3,"Привет", ")))");


// function greeting(phrase,smile){
//       console.log(`${this.name} ${this.surName}:${phrase}:${smile}`);
// }
// const user1={name:"Vasya", surName: "Ivanov"};
// const user2={name:"Petya", surName: "Semenov"};
// const greetingUser1=greeting.bind(user1,"Привет","^_^");
 
// // greetingUser1();
// // greetingUser1();
// // greetingUser1();
// // greetingUser1();

// const greetingUser2=greeting.bind(user2,"Hello", "*_*");
// greetingUser2();



const town = {
    name: "Moscow",
    population: "25 mln",
    getName: function () {
      console.log(this.name);
      return this.name;
    },
    getPopulation: function () {
      console.log(this.population);
      return this.population;
    },
  
    setAnyValue: function (key, value) {
      this[key] = value;
    },
  };
  const town2={
    name: "London",
    population: "5 mln"
  }
//   town.getName();
//   town.setAnyValue("name", "London");
//   town.setAnyValue("country", "UK");
//   town.getName();
  
//   console.log(town);
town.getName.call(town2);
town.getPopulation.call(town2);

const bound=town.setAnyValue.bind(town2);
bound("name", "Paris");
bound("country", "France");
console.log(town2)