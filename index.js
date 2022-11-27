const nums = [1, 2, 5, 8, 5, 2, 9, 3, 9, 5]

const newArr = nums.slice(0, 1)

console.log(newArr)
console.log(nums)

nums.splice(3, 0, 111, 23, 54)
console.log(nums)

const num2 = [2, 12, 12, 3, 8, 5, 9, 6, 3, 12, 5]
function changeMinElement(array, value) {
  //знайти мінімальне
  let minElem = array[0] // роблю припущення що перший елемент і є найменшим
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minElem) {
      //порівнюю найменший з кожним елементом
      minElem = array[i] //якщо поточний буде менше мінімального, то переписую значення мінімального
    }
  }
  //minElem=2
  //на місуе мінімального вставити value через цикл
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === minElem) {
  //     array[i] = value
  //   }
  // }
  let startIndex=0;
  while (true) {
    let startIndexMin = array.indexOf(minElem, startIndex++)
    if (startIndexMin === -1) {
      return
    }
    array.splice(startIndexMin, 1, value)
  }
}
console.log(num2)
changeMinElement(num2, 888)
console.log(num2)
