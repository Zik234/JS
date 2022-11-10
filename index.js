//1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
//Значення для перевірки функції вводить користувач.
// let userInput = prompt('enter a number');

// if(checkUserInputNumber(userInput)){
// const remaind= remainderFromDivision(Number(userInput));
// const result=checkRemaind(remaind);
// console.log(result);
// }else{
//   console.log('error');
// }
// function checkRemaind(result){
//   if(result === 0){
// return 'even'
//   }else{
//     return 'odd'
//   }

// }

// function remainderFromDivision(val){
//   return val%=2;
// }

// function checkUserInputNumber(value){
// if(value === ' ' || isNaN(value) || value === null ){
// return false;
// }
// return true;
// }

//2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той,
// який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

const userInput1 = 4;
const userInput2 = 6;
if(comparison (userInput1, userInput2)){
const more= comparisonResult(userInput1,userInput2);
console.log(more);
}else{
  console.log('noll');
}
function comparisonResult(result1,result2){
  if(result1 > result2){
return result1
  }else{
    return result2
  }
}

function comparison(val1,val2){if (typeof(val1) === typeof(val2)){
  return true;
}else{
  return false;
  }
}