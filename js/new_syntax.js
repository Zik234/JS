// 'use strict'

// class UserClasses {
//   //constructor object
//   /**
//    *
//    * @param {string} fname
//    * @param {string} iname
//    * @param {number} age
//    */  
//   constructor(fname, iname, age) {
//     if (typeof fname !== 'string') {
//       throw new TypeError('fname mustbe string')
//     }
//     if (typeof iname !== 'string') {
//       throw new TypeError('iname mustbe string')
//     }
//     // if (typeof age !== 'number') {
//     //   throw new TypeError('age mustbe be number')
//     // }
//     // if (age < 0 || age > 150) {
//     //   throw new RangeError('age must 0...150')
//     // }
//     this._fname = fname
//     this._iname = iname
//     this.age = age //seter
//   }
//   //geters &&seters
//   get age() {
//     return this._age
//   }
//   set age(age) {
//     if (typeof age !== 'number') {
//       throw new TypeError('age mustbe be number')
//     }
//     if (age < MIN_AGE || age > MAX_AGE) {
//       throw new RangeError('age must 0...150')
//     }
//     this._age = age
//   }
//   //constructor logic
//   fullName() {
//     return `${this._fname} ${this._iname}`
//   }
//   isAdult() {
//     return this.age >= ADULT_AGE
//   }
//   //static
// }

// try {
//   const persone2 = new UserClasses('Tim', 'Rot', 23)
//   persone2.age = 'qwqwqw'
//   console.log(persone2.age)
//   console.log(persone2.fullName())
//   console.log(persone2.isAdult())
// } catch (error) {
//   console.log(error)
// }

// console.log('********************')
