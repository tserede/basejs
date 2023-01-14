//задача 1
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
//  name (имя), surname (фамилия), rate (ставка за день работы), days 
//  (количество отработанных дней). Также класс должен иметь метод getSalary(),
//   который будет выводить зарплату работника. Зарплата - это произведение (умножение) 
//   ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.
// class Worker{
//     constructor(name,surname,rate,days){
//         this.name=name;
//         this.surname=surname;
//         this.rate=rate;
//         this.days=days;
//     }
//     getFullName(){
//         return `${this.name} ${this.surname}`;
//     }
//     getSallary(){
//         return `${this.getFullName()} получил ${this.days*this.rate}`;
//     }
// }
//  const FirstWorker=new Worker("Иван","Петров",500,22);
//  const SecondWorker=new Worker("Олег", "Сидоров",700,20);
//  console.log(FirstWorker.getSallary());
//  console.log(SecondWorker.getSallary());
 

//  //Задача 2
// // Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. 
// // Появляется новые свойство: workers - количество работников. И зарплата считается по
// // другому: произведение (умножение) ставки rate на количество отработанных дней и на
// // количество работников.

// class Boss extends Worker{
//     constructor(name,surname,days,rate,worker){
//         super(name,surname,days,rate);
//         this.worker=worker;
//     }
//     getSallary(){
//         return `Зарплата всех работников ${this.days*this.rate*this.worker} `;
//     }
// }
// const FirstBoss=new Boss("Иван","Иванов",10,20,2)
// console.log(FirstBoss.getSallary());

//Задача 3
// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и
//  для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения
// class Worker{
//     constructor(name,surname,rate,days){
//         this.name=name;
//         this.surname=surname;
//         this.rate=rate;
//         this.days=days;
//     }
//     getFullName(){
//         return `${this.name} ${this.surname}`;
//     }
//     getSallary(){
//         return `${this.getFullName()} получил ${this.days*this.rate}`;
//     }
// }

