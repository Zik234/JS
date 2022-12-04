'use strict'

// Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10
// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу
// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення
// входить в діапазон, якщо не входить - повертає false

// 1-створюю новий клас
// 2-роблю конструктор з властивостями
// 3-заповнюю параметри для властивостей
// 4-ставлю за замовчуванням значення полів
// 5-реалізовую сетер гетер для полів
//  -заповнюю їх помилками
// 6-створюю функцію для виводу полів
// 7-створюю функцію для запису значення між полями
// 8-ловлю помилки і виводжу інформацію
class RangeValidator {
  /**
   * @param {number} validate
   * @param {number} from
   * @param {number} to
   */
  constructor( from = MIN_VALIDATE, to = MAX_VALIDATE) {

    this.from = from
    this.to = to
  }
  get to() {
    return this._to
  }
  set to(to) {
    if(typeof to !== 'number'){
        throw new TypeError('The data type for each field is number')
    }
    if (to < this._from) {
      throw new RangeError('Number must be 0...10')
    }
    this._to = to
  }

  get from() {
    return this._from
  }
  set from(from) {
    if(typeof from !== 'number'){
        throw new TypeError('The data type for each field is number')
    }
    if (from > this._to) {
      throw new RangeError('Number must be 0...10')
    }
    this._from = from
  }

  getRang(){
    return [this._from,this._to]
  }
  isValidate(value){
    if(typeof value !== 'number'){
        throw new TypeError("Value must be a number")
    }
    return value>=this._from && value<=this._to
  }
}
try {
  const RangeValidator2 = new RangeValidator(4,5)
  console.log(RangeValidator2)
  console.log(RangeValidator2.getRang())
  console.log(RangeValidator2.isValidate(5))

} catch (error) {
  console.log(error)
}
