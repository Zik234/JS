'use strict'

//інкапсуляція (абстракція)
//наслідування
//поліморфізм

// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.

class Goods {
  //constructor object
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} number
   */
  constructor(name, price, currency, number) {
    if (typeof name !== 'string') {
      throw new TypeError('fname mustbe string')
    }
    if (typeof price !== 'number') {
      throw new TypeError('iname mustbe string')
    }
    if (typeof currency !== 'string') {
      throw new TypeError('iname mustbe string')
    }
    if (typeof number !== 'number') {
      throw new TypeError('iname mustbe string')
    }
    this.name = name
    this.price = price
    this.currency = currency
    this.number = number //seter
  }
  get price() {
    return this._price
  }
  set price(price) {
    if (price <= 0) {
      throw new RangeError('price must >0')
    }
    this._price = price
  }
  get number() {
    return this._number
  }
  set number(number) {
    if (number <= 0) {
      throw new RangeError('number must >0')
    }
    this._number = number
  }
  InformGoods() {
    return `${this.name}:${this._price}(${this.currency}) | ${this._number} pieces`
  }
  BuyGoods(num) {
    if (num <= 0) {
      throw new RangeError('number must >0')
    }
    if (num === undefined) {
      return `${this._price * this._number}(${this.currency})`
    } else if (typeof num !== 'number') {
      throw new TypeError('iname mustbe string')
    }
    return `${this.name}:${this._price}(${this.currency}) | ${num} pieces\n${
      this._price * num
    }(${this.currency})`
  }
}
class Physicalproduct extends Goods {
  constructor(name, price, currency, number, weight) {
    super(name, price, currency, number)
    if (typeof weight !== 'number') {
      throw new TypeError('fname mustbe number')
    }
    this.weight = weight
  }
  get weight() {
    return this._weight
  }
  set weight(weight) {
    if (weight <= 0) {
      throw new RangeError('number must >0')
    }
    this._weight = weight
  }
  InformGoodsPhysical() {
    return `${this.name}:${this.price}(${this.currency}) | ${this.number} pieces | ${this._weight} kg`}
  weightGoods() {
    return `${this.name} - ${this.number * this._weight} kg`
  }
}

class Virtualproduct extends Goods {
  constructor(name, price, currency, number, memorySize) {
    super(name, price, currency, number)
    if (typeof memorySize !== 'number') {
      throw new TypeError('fname mustbe number')
    }
    this.memorySize = memorySize
  }
  get memorySize() {
    return this._memorySize
  }
  set memorySize(memorySize) {
    if (memorySize <= 0) {
      throw new RangeError('number must >0')
    }
    this._memorySize = memorySize
  }
  InformGoodsVirtual() {
    return `${this.name}:${this.price}(${this.currency}) | ${this.number} pieces | ${this._memorySize} mBt`}
    memorySizeGoods() {
    return `${this._memorySize} mBt`
  }
}

try {
  const Goods1 = new Goods('Hous', 23, 'UAH', 5)
  console.log(Goods1)
  console.log(Goods1.InformGoods())
  console.log(Goods1.BuyGoods())
  console.log(Goods1.BuyGoods(2))
  const Goods2 = new Physicalproduct('biff',55,'EU',10, 2)
  console.log(Goods2.InformGoodsPhysical())
  console.log(Goods2.weightGoods())
  const Goods3 = new Virtualproduct('chick',12,'FR',43, 7)
  console.log(Goods3.InformGoodsVirtual())
  console.log(Goods3.memorySizeGoods())
} catch (error) {
  console.log(error)
}
