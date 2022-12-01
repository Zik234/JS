'use strict'

//1) Написати функцію струлку, яка приймає безліч аргументів і повертає їх добуток.

// const sum = (...rest) => rest.reduce((sum, item) => sum * item, 0)

const product = (...num) => num.reduce((prod, vel) => prod * vel)

console.log(product(2, 2, 2, 1, 3, 4))

//2) Є масив чисел, треба написати функцію, яка повертає масив з
//двох елементів,
//які є мінімальним і максимальним значенням джерельного масиву.

const arrNum = [10,10,1,2,3,0,4,7,9]

const maxMinArrNum=(num)=>[Math.max(...num),Math.min(...num)]
console.log(maxMinArrNum(arrNum))