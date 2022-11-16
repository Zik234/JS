// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

// const MAX_NUMBER=35;
// const MIN_NUMBER=15;
// const multiple=6;
// let count=0;

// while(true)
// {
//     const inputNumber=prompt('enter number')
//     count++;
//     if(count>2){
//         console.log("error");
//         break;
//     }
//     if (inputNumber<=MIN_NUMBER && inputNumber>=MAX_NUMBER && inputNumber%multiple===0) {
//         console.log("You win!");
//         break;
//     }
// }

// const num1 =12;
// const num2=45;

// while(true){
//     const userInput = prompt(`enter answer: ${num1}+${num2}=`);
//     if(Number(userInput)=== num1+num2){
//         console.log('Good');
//         break;
//     }
// }

const product = {
    name: `dress`,
    price: 123.44,
    currency: `uah`,
    showInfo: function () {
        return`product name: ${this.name}
        prece: ${this.currency} ${this.price}`
    }
}
console.log(product.showInfo());