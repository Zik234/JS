'use strict'


const sentence = "     to         BE       oR   nOt        To     bE ";
/*
1-прибрати пробіли і повернути нову строку
2- привести до нижнього регистру і повернути нову строку
3- отримати кожне слово окремо
4- використовуємо фільтр і повертаємо всі правди
5- для кожного слова
:- перша буква велика
:- з нових слів отримати строку
6- робимо одну строку через пробіл
7- виводимо строку
 */

function toJadenCase(str) {
return str
.trim()
.toLowerCase()
.split(" ")
.filter(Boolean)
.map((word) => word[0].toUpperCase() + word.substring(1))
.join(" ");
}
console.log(toJadenCase(sentence)); //повинен бути результат:  'To Be Or Not To Be'