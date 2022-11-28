// 1) Знайти середнє арифметичне значення усіх переданих
//аргументів, якщо аргументів не має - повертати null

function averageValue() {
  let sum=0//роблю припущення що сумма = 0
    for (let i = 0; i < arguments.length; i++) {//знаходжу сумму аргументів за допомогою циклу
      if(arguments[i]===NaN){//якщо аргументів немає то вивожу null(не працює)
        return null
      }
      sum += arguments[i]
    }
    return sum / arguments.length//повертаю середнє значення аргументів
}

console.log(averageValue())

//2) Замінити усі максимальні значення в масиві на значення 0

// const nums = [1, 2, 9, 4, 1, 9, 3, 4, 5, 6, 7, 8, 9,5]
// function changeMaxElement(array, value) {
//   //знайти максимальне
//   let maxElem = array[0] //роблю припущення що перший елемент максимальний
//   for (let i = 0; i < array.length; i++) {
//     //перебираю всі елементи
//     if (array[i] > maxElem) {
//       //порівнюю найбільший з кожним елелментом
//       maxElem = array[i] //переписую значення максимального
//     }
//   }
//   //на місце максимального вставити value
//   // for (let i = 0; i < array.length; i++) {
//   //   if (array[i] === maxElem) {
//   //     array[i] = value
//   //   }
//   // }

//   let startIndex = 0
//   while (true) {
//     let startIndexMax = array.indexOf(maxElem, startIndex++) //повертаємо макс елемент
//     if (startIndexMax === -1) {
//       return
//     }
//     array.splice(startIndexMax, 1, value)
//   }
// }
// changeMaxElement(nums, 0)
// console.log(nums)
