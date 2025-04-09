// Задание 1

 // Спрашиваем у пользователя возраст
 let age = prompt("Ваш возраст?");

 // Выводим сообщение с возрастом пользователя
 console.log(`Вам ${age} лет`);
 
 // Спрашиваем у пользователя его имя
 let name = prompt("Как вас зовут?");
 
 // Выводим сообщение с именем пользователя
 console.log(`Добро пожаловать на сайт, ${name}!`);
  
 // Задание 2
  // 1. Найти остаток деления двух переменных
 let r = 13;
 let g = 5;
 let remainder = r% g; // Остаток от деления 13 на 5
 console.log(remainder); 

 // 2. Что выведет на экран
 let a2; // a2 объявлена, но не инициализирована
 alert(a2); // результат: undefined
 
 // 3. Что выведет на экран
 alert('abc' * 3); // результат: NaN, так как abc нельзя умножить
 
 // 4. Что выведет на экран
 alert(1 / 0); // результат: Infinity
 alert(-1 / 0); // результат: -Infinity
 
 // 5. Что выведет на экран
 alert('2' * '3'); // результат: 6 (строки преобразуются в числа для умножения) 
 
 // Задание 3
 
 const t2 = '2';
 const b2 = '3';
 console.log(+t2 + +b2); 
 const a1 = prompt('a'); 
 const b1 = prompt('b'); 
 console.log(`Сумма чисел равна ${+a1 + +b1}`); // 3
 console.log(`Разность чисел равна ${+a1 - +b1}`); // -1
 console.log(`Произведение чисел равно ${+a1 * +b1}`); // 2
 console.log(`Частное чисел равно ${+a1 / +b1}`); // 0,5
 console.log(`Остаток от деления чисел равен ${+a1 % +b1}`); // 1
 
 // Задание 4
 
 console.log(String(true)); // true
 console.log('a' + true); // atrue
 console.log(Number(true)); // 1
 console.log(true + 1); // 2
 console.log(true + true); // 2
 console.log(true - true); // 0
 console.log( String(true) + Number(true)) // true1
 
 // Задание 5
 
 const a = +prompt('a'); //10
 const text = a==5 ? 'Число равно 5' : a>5 ? 'Число больше 5' : 'Число меньше 5';
 console.log(text); // число больше 5
 const test1 = +prompt('Введите число'); // 10
 const test2 = +prompt('Введите число'); // 5
 const text2 = test1==test2 ? 'Числа равны' :
 test1>test2 ? 'Первое число больше второго' : 
 'Второе число больше первого';
 console.log(text2) // Первое число больше второго
 
 const c = +prompt('Введите число'); // 5
 const itog = {o:false, t:false};
 if (c>0){
     itog.o=true;
     console.log('Число больше нуля');
     if(c<15){
         itog.t=true;
         console.log('Число меньше 15');
     }
     else{
         console.log('Число больше 15');
     }
 }
 else{
     console.log('Число меньше нуля');
     if (c<15){
         console.log('Число меньше 15');
         itog.t=true;
     }
     else{
         console.log('Число больше 15');
     }
 }
 const {o, t} = itog;
 console.log(o&&t?'Значение удовлетворяет условиям': 'Значение не удовлетворяет условиям');
 
 // Задание 6
 
 const num1 = +prompt('Введите число'); // 1
 const num2 = +prompt('Введите число'); // 3
 console.log(num1<=0 || num2>=3 && num2>=3) // true
 
 // Задание 7
 
 let test5 = true;
 console.log(test5? '+++' : '---') // true

 // Задание 8
 
 const [start, end] = [1, 31];
 const day = Math.floor(Math.random()*(end-start)+start);
 console.log(day);
 const decade = Math.ceil(day/10);
 console.log(decade)
 
 // Задание 9

  const number = parseInt(prompt("Введите положительное целое число:"));
 // Находим количество сотен, десятков и единиц
 const hundreds = Math.floor(number / 100) % 10; // Сотни
 const tens = Math.floor(number / 10) % 10;      // Десятки
 const units = number % 10;                       // Единицы
 console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`); // Выводим результат