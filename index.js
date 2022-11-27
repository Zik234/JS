// написати скрипт, який створює об'єкт Товар з
// властивостями:  назва, ціна, валюта
// методами: показати усю інформацію про товар,
// установити знижку на ціну і повернути нову ціну
// з урахуванням знижки

// скрипт, який створює об'єкт Товар з
// властивостями:  назва, ціна, валюта
function Goods(name, price, currency) {
  this.name = name
  this.price = price
  this.currency = currency
}

// методи

function MetodsGoods() {
  this.ShowInfoProduct = function () {
    // метод інформація про продукт
    return `Information about product:
name : ${this.name},
prise: ${this.price} ${this.currency}`
  }

  this.DiscountPrice = function (value) {
    // метод встановлення знижки
    if (value > 0 && value <= 100) {
      return `Discount on ${this.name}: ${value}%`
    }
    console.log('Discount cannot be accepted')
    return NuN;
  }

  this.DiscountProduct = function (value2) {
    //метод повертаючий товар зі знижкою
    this.price = this.price - (this.price * value2) / 100
    return `Information about product on discount:
name : ${this.name},
prise: ${this.price} ${this.currency}`
  }
}

Goods.prototype = new MetodsGoods()

const dishes = new Goods('cup', 40, 'UAH') // створив продукт
console.log(dishes.ShowInfoProduct()) // вивів інформацію про продукт
const discount = prompt('enter discount') // користувач ввів знижку
console.log(dishes.DiscountPrice(discount)) //виводимо перевірку можливої знижки
console.log(dishes.DiscountProduct(discount))//виводимо інформацію зі знижкою
