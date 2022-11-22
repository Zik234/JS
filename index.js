// function sum() {
//   console.log(arguments)
//   let resultSumma = 0
//   for (let i = 0; i < arguments.length; i++) {
//     resultSumma += arguments[i]
//   }
//   return resultSumma
// }

// функція приймає безліч приймає безліч аргументів і повертає масив,
// в якому будуть тільки парні значення з переданих аргументів, якщо
// таких не має - то пустий масив
// getEvenArray(1,2,3,4) => [2,4]
// getEvenArray(1,5) => []
// getEvenArray(6,2,13,4,5,8) => [6,2,4,8]

function getEvenArray() { //створюю масив
  const arrEven = []
  for (let i = 0; i < arguments.length; i++) { //перевіряю усі аргументи у циклі
    if (arguments[i] % 2 === 0) { //для кожного роблю перевірку
      arrEven.push(arguments[i]) //якщо парний - то вставляю в кінець мого нового масиву парне значення
    }
  }
  return arrEven //повертаємо масив
}
console.log(getEvenArr(1, 2, 3, 4))
