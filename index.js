// написати скрипт (можна функцію можна без), який виводить індекс
//  максимального елемента в масиві. Якщо максимальних елементів
//   декілька(значення однакові) - виводить індекс останнього
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

// * повертати кількість максимальних(однакових) елементів
// const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

const arrNums = [1, 9, 5, 6, 7, 9, 6] //cтворюю масив

function checkArrNums(array) {
  let checkIndex = 0 //створюю максимальне значення
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= array[checkIndex]) {
      checkIndex = index
    }
  }
  return checkIndex
}
console.log(
  'arrNums = [',
  arrNums.join(', '),
  '] => index',
  checkArrNums(arrNums),
)

function checkMaxElement(array) {
  let maxElement = 0
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[maxElement]) {
      maxElement = array[index]
    }
  }
  return maxElement
}

function changeMaxElement(array){
  let maxElement=checkMaxElement(array)
  let count = 0
  for (let index = 0; index < array.length; index++) {
    if(maxElement === array[index]){
      count++
    }
  }
  return count
}

console.log(
  'arrNums = [',
  arrNums.join(', '),
  '] => number',
  changeMaxElement(arrNums),
)
