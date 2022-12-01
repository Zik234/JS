'use strict'

// Написати рекурсивну функцію, яка обчислює факторіал числа.
// Функція повина приймати тип данних: number або bigint, і кидатися помилками.
// Викликати функцію, використовуючи конструкцію try...catch


//пишу функцію яка приймає число
//знаходжу факторіал
//якщо введене число не коретне вивожу помилку
//якщо число від'ємне, помилка
//вивожу факторіал
//створюю трай кеч
//переношу в трай вивід факторіала
//кеч прописую умови виводу помилок
//створюю вивід рядка після трай кеч, для перевірки їх роботи
/**
 * @param {number} num
 * @returns {number}
 * @throws {RangeError}
 * @throws {TypeError}
 */


function factorial(num) {
  if (typeof num !== 'number' && typeof num !== 'bigint') {
    throw new TypeError("Incorrect data entered, please enter a number")
  }
  if(num<0){
    throw new RangeError('The factorial cannot be negative')
  }
  if (num === 0) {
    return typeof num === 'bigint' ? 1n : 1
  }
  return num * factorial(num - 1)
}

try {
    console.log(factorial(5))
} catch (error) {
    if(error instanceof TypeError){
        console.log(error)
    }
    if(error instanceof RangeError){
        console.log(error)
    }
}

console.log('A string of text to check for try...catch')