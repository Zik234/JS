// 'use strict'

// // Написати клас User(ім'я, прізвище, стать ) і клас Student(все, що має User і додатково рік вступу).
// // За допомогою вбудованого об'єкту Date перевіряєте, щоб рік вступу був не більше за поточний рік.
// // У студента буде метод, який повертає кількість років які начається студент, тобто курс.
// // Якщо рік вступу дорівнює поточному року - то це 1 курс. Місяці і дні вступу не враховуємо.

// class User {
//   /**
//    *
//    * @param {string} fname
//    * @param {string} iname
//    * @param {string} gender
//    */
//   constructor(fname, iname, gender) {
//     if (this.constructor === User) {
//       throw new Error('You cannot create instans in abstract class')
//     }
//     this.fname = fname
//     this.iname = iname
//     this.gender = gender
//   }
//  fullName() {
//     return `${this.fname} ${this.iname}: ${this.gender}`
//   }
// }

// class Student extends User {
//   /**
//    * 
//    * @param {srting} fname 
//    * @param {string} iname 
//    * @param {string} gender 
//    * @param {number} yearOfAdmission 
//    */
//   constructor(fname,iname,gender, yearOfAdmission) {
//     super(fname,iname,gender)
//     this.yearOfAdmission = yearOfAdmission
//   }
//   year(velue){
//     const data = new Data(velue)
//     if(data>2022 || data < 2016){
//       throw new Error('Student year')
//     }if(data<=2022 && data >= 2016){
//       return velue-2016
//     }
//   }
// }

// try{
// const student1 = new Student('Bob', 'Dilan', 'Men')
// console.log(student1.fullName())
// console.log(student1.year(2017))
// }catch(error){
// console.log(error)
// }
