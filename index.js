//Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - fall
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else

//const moon = prompt('enter the month number from 1 to 12')
// switch (moon) {
//   case '1':
//     case '2':
//       case '12':
//     console.log('winter');
//     break;
//     case '3':
//     case '4':
//       case '5':
//     console.log('spring');
//     break;
//     case '6':
//     case '7':
//       case '8':
//     console.log('summer');
//     break;
//     case '9':
//     case '10':
//       case '11':
//     console.log('autumn');
//     break;
//   default:
//     console.log('404 try again');
//     break;
// }



// const moon = prompt('enter the month number from 1 to 12')
// const moonNumber=Number(moon);
// if(moonNumber === 1 || moonNumber === 2 || moonNumber === 12){
// console.log('winter');
// }else if(moonNumber >= 3 && moonNumber <= 5){
//   console.log('spring');
// }else if(moonNumber >= 6 && moonNumber <= 8){
//   console.log('summer');
// }else if(moonNumber >=9 && moonNumber <= 11){
//   console.log('autumn');
// }else{
//   console.log('404 try again');
// }




// Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
// [0 - 2) baby
// [2 - 6) kinder
// [6 - 12) child
// [12 - 18) teenager
// [18 - 65) adult
// [65 - 100) oldmen
// [100 - 150) super!
// 404 try again
// оберіть самі потрібну конструкцію

// const userInputAge = prompt('enter your age')
// const ageNumber=Number(userInputAge)

// if(ageNumber >= 0 && ageNumber <= 1){
// console.log('baby');
// }else if(ageNumber >= 2 && ageNumber <= 5){
//   console.log('kinder');
// }else if(ageNumber >= 6 && ageNumber <= 11){
//   console.log('child');
// }else if(ageNumber >=12 && ageNumber <= 17){
//   console.log('teenager');
// }else if(ageNumber >=18 && ageNumber <= 64){
//   console.log('adult');
// }else if(ageNumber >=65 && ageNumber <= 99){
//   console.log('oldmen');
// }else if(ageNumber >=100 && ageNumber <= 150){
//   console.log('super');
// }else{
//   console.log('404 try again');
// }




// Людина вводить годину([0-23]), ви виводите привітання
// [7 - 11) - good morning
// [11 - 18) - good day
// [18 - 23) - good evening
// усе інше - good night
// усе невірне - 404 try again
// виконати 2 через switch та if...else if...else і скажете який краще!!!


// const userInputTime = prompt('enter a time between 0 and 24')
// switch (userInputTime) {
//   case '0':
//     case '1':
//       case '2':
//         case '3':
//           case '4':
//             case '5':
//               case '6':
//     console.log('good night');
//     break;
//     case '7':
//     case '8':
//       case '9':
//         case '10':
//     console.log('good morning');
//     break;
//     case '11':
//     case '12':
//       case '13':
//         case '14':
//           case '15':
//             case '16':
//               case '17':
//     console.log('good day');
//     break;
//     case '18':
//     case '19':
//       case '20':
//         case '21':
//           case '22':
//             case '23':
//     console.log('good evening');
//     break;
//   default:
//     console.log('404 try again');
//     break;
// }


// const userInputTime = prompt('enter a time between 0 and 24')
// const timeNumber=Number(userInputTime)
// if(timeNumber >= 0 && timeNumber <= 6){
// console.log('good night');
// }else if(timeNumber >= 7 && timeNumber <= 11){
//   console.log('good morning');
// }else if(timeNumber >= 12 && timeNumber <= 17){
//   console.log('good day');
// }else if(timeNumber >=18 && timeNumber <= 23){
//   console.log('good evening');
// }else{
//   console.log('404 try again');
// }