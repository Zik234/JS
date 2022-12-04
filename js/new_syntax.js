'use strict'

class UserClasses {
  //constructor object
  /**
   *
   * @param {string} fname
   * @param {string} iname
   * @param {number} age
   */
  constructor(fname, iname, age,isBan=false) {
    if (typeof fname !== 'string') {
      throw new TypeError('fname mustbe string')
    }
    if (typeof iname !== 'string') {
      throw new TypeError('iname mustbe string')
    }
    this.fname = fname
    this._iname = iname
    this.age = age //seter
    this.isBan=isBan
  }
  //geters &&seters
  get age() {
    return this._age
  }
  set age(age) {
    if (typeof age !== 'number') {
      throw new TypeError('age mustbe be number')
    }
    if (age < MIN_AGE || age > MAX_AGE) {
      throw new RangeError('age must 0...150')
    }
    this._age = age
  }
  //constructor logic
  fullName() {
    return `${this.fname} ${this._iname}`
  }
  isAdult() {
    return this._age >= ADULT_AGE
  }
  //static
  static isUserClasses(value) {
    return value instanceof UserClasses
  }
  static getInstance() {
    return new UserClasses('Test', 'Testik', 44)
  }
}

try {
  //debugger
//   const test = UserClasses.getInstance()
//   console.log(test)
//   const persone2 = new UserClasses('Tim', 'Rot', 23)
//   console.log(UserClasses.isUserClasses(persone2))
//   console.log(UserClasses.isUserClasses({}))
  //   persone2.#age = 45
  // так як нижче робити не можна
  //console.log(persone2._age)
//   console.log(persone2.fullName())
//   console.log(persone2.isAdult())
//   console.log(persone2.fname)
//   persone2.age = 56 //setter
//   console.log(persone2.age) //geter
//   console.log(persone2)
  // так як нижче робити не можна
  //console.log(persone2._iname)
  //console.log(persone2._age)
} catch (error) {
  console.log(error)
}

console.log('********************')
