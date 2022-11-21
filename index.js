// const arrNums1=[1,2,3];
// const arrNums2=[9,8.7];

// //const resultArr = arrNums1.concat(arrNums2);

// const newArray = new Array(5)
// .fill(0)
// .concat(14);

// const deletedElement = arrNums1.pop();

// const deletedElementFirs = arrNums2.shift();

// arrNums1.unshift(15,45,78);

// const languages = ['ua','fr','pl','en'];

// const firstLang = languages.shift();
// languages.push(firstLan

const languages = ['ua', 'ua', 'en', 'pl', 'fr']

//join
const string = languages.join('^')
// //includes
// const checkLeng = languages.includes('pl');//повертає true false

// if(checkLeng){
//   console.log('dzen\' dobruy')
// }else{
//   console.log('error');
// }

// //reverse

// const reverseLanguages = languages.reverse();//повертає address
// languages.unshift('fr');

// //indexOf
// const findIndex1 = languages.indexOf('ua')//повертає перший індекс що є
// console.log(findIndex1);
// const findIndex2 = languages.lastIndexOf('ua')//повертає останній індекс що є
// console.log(findIndex2);

//задача
// const checkKey = function(array, key){
//   return array.includes(key);
// };
// console.log(checkKey(languages, 'fr'))

//написати функцію яка приймає масив і повертае тру
//якщо в масиві є два однакові значення інакше фолз

function checkKeysInRow(array) {
  //для кожного елементу треба зробити наступну перевірку
  for (let index = 0; index < array.languages; index++) {
    //поточний === наступний
    if (array[index] === array[index + 1]) {
      //якщо правда то завершити роботу і повернути true
      return true
    }
    //якщо дійшли до кінця і не знайшли поспіль однакових false
    return false
  }
}
