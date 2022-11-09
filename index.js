// 1) Якщо значення змінної number позитивне або 0 - виводимо ''positive",
// інакше - "negative"

const number1 = 18;
const MINPOSITIV = 0;
if (number1>=MINPOSITIV) {
  console.log('positiv')
} else {
  console.log('negativ')
}

//2) Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання,
//інакше - вивести результат множення

const num1 = 20;
const num2 = 15;
if(num1>num2){
  console.log(num1 - num2);
}else{
  console.log(num1 * num2);
}

//3) Якщо значення змінної кратно(тобто ділеться без остачі) на 7 і одночасно кратна 3 - виводимо "you win!",
// інакше - "you loose"

const variables = 21;
const permanent1 = 7;
const permanent2 =3;
if (variables%permanent1===0 && variables%permanent2===0) {
  console.log('you win!');
} else {
  console.log('you loose!')
}