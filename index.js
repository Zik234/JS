// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

// const MAX_NUMBER=35;
// const MIN_NUMBER=15;
// const multiple=6;
// let count=0;
// const NUMBER_CONDITIONS=function(val){
//     return val>=MIN_NUMBER && val<=MAX_NUMBER && val%multiple===0;
// }

// while(true)
// {
//     const inputNumber=prompt('enter number')
//     if (NUMBER_CONDITIONS(inputNumber)) {
//         console.log("You win!");
//         break;
//     }
//     count++;
//     if(count>2){
//         console.log("error");
//         break;
//     }
// }


const MAX_NUMBER=35;
const MIN_NUMBER=15;
const multiple=6;
const NUMBER_CONDITIONS=function(val){
    return val>=MIN_NUMBER && val<=MAX_NUMBER && val%multiple===0;
}
for (let i = 0; i < 3; i++) {
    const inputNumber=prompt('enter number');
    if (NUMBER_CONDITIONS(inputNumber)) {
          console.log("You win!");
         break;
    }
    if (i===2) {
        console.log("error");
    }
}