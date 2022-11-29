////Задача 1
// // //Что выведет функция?
// function f() {
//     console.log(this);
//    }
   
//    let user = {
//     g: f.bind(null),
//    };
// user.g(); //object Window


//    //Задача 2
// //Можем ли мы изменить this дополнительным связыванием? Ответ: нет. bind работает один раз и дополнительный bind ничего не поменяет
//    function f() {
//     alert(this.name);
//    }
   
//    f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
   
//    f();


// // Задача 3
// // В свойство функции записано значение. Изменится ли оно после применения bind?
// function sayHi() {
//  alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//  name: "Вася"
// });

// alert( bound.test );//underfind
// //Задача 4
// //Вызов askPassword() в приведённом ниже коде должен проверить пароль и
// //затем вызвать user.loginOk/loginFail в зависимости от ответа.
// //Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//  let password = prompt("Password?", '');
//  if (password == "rockstar") ok();
//  else fail();
// }

// let user = {
//  name: 'Вася',

//  loginOk() {
//    alert(`${this.name} logged in`);
//  },

//  loginFail() {
//    alert(`${this.name} failed to log in`);
//  },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// // Задача 5
// //Объект user был изменён. Теперь вместо двух функций loginOk/loginFail 
// //у него есть только одна – user.login(true/false).
// //Что нужно передать в вызов функции askPassword в коде ниже, чтобы она
// // могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
//  let password = prompt("Password?", '');
//  if (password == "1234") ok();
//  else fail();
// }

// let user = {
//  name: 'John',

//  login(result) {
//    alert( this.name + (result ? ' logged in' : ' failed to log in') );
//  }
// };

// askPassword(user.login.bind(user,true),user.login.bind(user,false))

// //задача 6
// //Напишите в указанном месте конструкцию с методом bind() так, 
// //чтобы this внутри функции func всегда указывал на value.
// //из переменной elem.
// const elem = {value: 'Привет'}

// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }

// const helloFunc=func.bind(elem);

// //Тут напишите конструкцию с bind()

// helloFunc('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// helloFunc('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


   
// Задача 7
// Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c
const sum = (a, b, c) => a + b + c


//Задача 8
//Реализовать таймер-функцию используя замыкания. Функция принимает два
// аргумента начальное значение и значение завершения. Таймер движется
// назад.При достижении точки завершения в консоль выводится значение 
//таймера и сообщение о завершении работы таймера.

   