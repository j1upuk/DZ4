"use strict";
/// Таски на переменные
// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.
let a;
let b;
a = 4;
b = 3;
console.log(a*b);

//2) Создайте две переменные c и d. Выведите в консоль результат деления.

let c;
let d;
c = 4;
d = 3;
console.log(c/d);

//3) Создайте две переменные e и f. Выведите в консоль результат сложения.

let e;
let f;
e = 4;
f = 3;
console.log(e+f);

// 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

let a4;
let b4;
let c4;
let d4;
a4 = 11;
b4 = "true";
c4 = "java script";
d4 = 100;
console.log(a4,b4,c4,d4);


/*5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
let num = 1;
num = num + 11;
num = num - 11;
num = num * 11;
num = num / 11;
num = num + 1;
num = num - 1;*/

let num;
num = 1;
num  += 11;
num  -= 11;
num  *= 11;
num  /= 11;
num  ++;
num  --;
console.log(num);

//Таски на prompt:

//1) Запросить число у пользователя и возвести его в квадрат
let box;
box = +prompt("enter the number");
box = box **2;
console.log(box);

//2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.
let number1;
let number2;
let arithmMean;
number1 = +prompt("enter the number1");
number2 = +prompt("enter the number2");
arithmMean = (number1 + number2) / 2;
console.log(arithmMean);

//3) Перевести число минут в секунды. Число спрашивать у пользователя.

let cek;
cek = +prompt("enter the minutes") * 60;
console.log(cek);

/!* 4) Создайте переменные greeting со значением'Hello, ' и userName.Спросите имя пользователя и занесите данное
значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.*!/

let greeting;
let userName;
greeting = "Hello, ";
userName = prompt("enter your name");
alert(greeting+userName);

//Таски на условия:
// 1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

let userNumber;
userNumber = +prompt("enter the number");

if (userNumber === 10) {
    console.log('Верно');}
else { console.log('Неверно');}

/*2) Напишите две проверки.
    Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
    Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
Проверьте работу скрипта при test, равном true, false. */

let test;
test = false;
if (test === true) {
    console.log('Верно');}
else { console.log('Неверно'); }

let test2;
test2 = false;
if (test2 !== true) {
    console.log('Верно');}
else { console.log('Неверно'); }



/*3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн.,
    а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.*/


let cost;
cost = +prompt("enter the cost");
if (cost < 500) {
    console.log(cost);
}
else {
    if (cost < 800) {
        console.log(cost*0.97);
    }
    console.log(cost*0.95);
}


/*Таски на циклы. Каждую задачу решить всеми тремя циклами!
    1) Вывод чисел от 25 до 0 (порядок уменьшения)*/

let a4;
a4 = 25;
while (a4 > -1) {
    console.log(a4);
    a4--;
}
let b4;
b4 = 25;
do {
    console.log(b4);
    b4--;
}
while (b4 > -1) ;

for (let c4 = 25; c4 > -1; c4--){
    console.log(c4);
}

/*
2) Вывод чисел от 10 до 50, которые кратны 5*/

/et d4;
d4 = 10;
while (d4 < 55) {
    console.log(d4);
    d4 = d4+5;
}
let f4;
f4 = 10;
do {
    console.log(f4);
    f4 = f4 + 5;
}
while (f4 < 55);

for (let s4 = 10; s4 < 55; s4++ ){
    if (s4 % 5 == 0)   {
        console.log(s4);
    }
    else { continue }
}
//  вариант 2
for (let s42 = 10; s42 < 55; s42 = s42 + 5 ){
            console.log(s42);
  }
/*
Найти сумму чисел в пределах от 1 до 100.*/

let r4;
let  cumm1;
cumm1 = 1;
r4 = 1;
while (r4 < 100) {
        r4++;
        cumm1 = cumm1 + r4;
}
console.log(cumm1);


let u4;
u4 = 1;
let  cumm2;
cumm2 = 1;
do {
        u4++;
    cumm2 = cumm2 + u4;
}
   while (u4 < 100);
console.log(cumm2);

let  cumm3;
cumm3 = 0;

for (let i4 = 1; i4 < 101; i4++ ) {
    cumm3 = cumm3 + i4;
}
console.log(cumm3);

// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
let o4;
o4 = +prompt("2 + 2 * 2=?");
while (o4 != 6) {
    console.log('еще раз')
    o4 = +prompt("2 + 2 * 2=?");
    }
console.log('верно')


let p4;

do {
    p4 = +prompt("2 + 2 * 2=?");
    console.log('еще раз')   //  что то тут не так
    }

while (p4 != 6);
console.log('верно')



let x4;
x4 = +prompt("2 + 2 * 2=?");
for (let z4 = 0; x4 !=6; z4++){
    console.log('еще раз')
    x4 = +prompt("2 + 2 * 2=?");
}
console.log('верно')

/*Таска на функции
1) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
    Ожидаемый вывод:
    isAdult(20); // true
isAdult(4); // false*/




function isAdult( majority ) {
    let userAge;
    userAge = +prompt("how old are you");

    if (userAge > 17) { majority = true;
    }
    else { majority = false;}
    console.log(majority)
}
isAdult ();


