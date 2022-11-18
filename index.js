// Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
// функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!!

// const minRange=1;
// const maxRange=100;
// const userNumber=function(){
// while(true){
// const num =prompt('enter a number from 1 to 100');
// if(isNaN(Number(num)) || num===null|| num==='' || num===' ' || num<minRange || num>maxRange){
// continue;
// }
// return Number(num);

// }
// }

// console.log(userNumber());

// Написати скрипт, який виводить числа (числа повинні бути
// парними і кратними 9)з діапазону від 0 до 100 у зворотньому порядку.
// (* - це повинна бути функція)

// const startRange = 0
// const endRange = 100

// for (let number = endRange; number >= startRange; number--) {
//   if (number % 2 === 0 && number % 9 == 0) {
//     console.log(number)
//   }
// }




// Створити функцію конструктор, яка описує користувача:
// -ім'я
// -прізвище
// -вік
// - метод, який логує ім'я та прізвище разом

function Man(name, surname, ages){
this.name = name;
this.surname = surname;
this.ages = ages;
this.nameSurname=function(){
console.log(name,surname,"\n",ages)
};
}

const manAdam = new Man('Adam','Smesher', 30)
console.log(manAdam);
manAdam.nameSurname();

