// class Moderator extends UserClasses {
//   constructor(fname, iname, age, reting) {
//     super(fname, iname, age)
//     this.reting = reting
//   }
//   applyMessage() {
//     return 'apply'
//   }
// }

// class Admin extends Moderator {
//   constructor(fname, iname, age, reting, propAdmin) {
//     super(fname, iname, age, reting)
//     this.propAdmin = propAdmin
//   }
//   ban(user) {
//     if (UserClasses.isUserClasses(user)) {
//       return user.isBan = true
//     }
//     throw new TypeError('instance must be user')
//   }
//   unBan(user) {
//     if (UserClasses.isUserClasses(user)) {
//       return user.isBan = false
//     }
//     throw new TypeError('instance must be user')
//   }
// }

// try {
//   const moder = new Moderator('Moder', 'Moderator', 55, 4.5)
//   console.log(moder.fullName())
//   console.log(moder)
//   const admin = new Admin('Ad', 'Admin', 22, 5.0, 'red')
//   admin.ban(moder)
//   console.log(moder.isBan)
// } catch (error) {
//   console.log(error)
// }

/*
Squirrel
-name(string) зробити setter&getter
-color(string)
-jump() // повертає рядок у вигляді '[name] is jump'

FlySquirrel
-name(string) зробити setter&getter
-color(string)
-maxFlyLength(number) значення за замовчуванням 450
-jump() // повертає рядок у вигляді '[name] is jump'
-fly(length) // повертає рядок у вигляді '[name] is fly at [length]'

MagicSquirrel
-name(string) зробити setter&getter
-color(string)
-maxFlyLength(number)
-words([string])
-jump() // повертає рядок у вигляді '[name] is jump'
-fly(length) // повертає рядок у вигляді '[name] is fly at [length]'
-sayWords() // виводить в консоль масив слів, де кожне слово на окремому рядку


створити екземпляр кожної білки, викликати на кожній білці усі доступні їй методи
використати конструкцію try/catch
*/
// class Squirrel {
//   /**
//    *
//    * @param {string} name
//    * @param {string} color
//    * @param {number} jump
//    */
//   constructor(name, color) {
//     this.name = name
//     this.color = color
//   }
//   get name() {
//     return this._name
//   }
//   set name(name) {
//     if (typeof name !== 'string') {
//       throw new TypeError('name must be string')
//     }
//     this._name = name
//   }
//   nameSquirrel() {
//     return `${this._name}, ${this.color}`
//   }
//   jump() {
//     return `${this._name} jump`
//   }
// }

// class FlySquirrel extends Squirrel {
//   /**
//    * @param {number} maxFlyLength
//    */
//   constructor(name, color, maxFlyLength = 450) {
//     super(name, color)
//     this.maxFlyLength = maxFlyLength
//   }
//   fly(length) {
//     if (length > this.maxFlyLength || length < 0) {
//       throw new RangeError('Flyquirrel fly 0...150m')
//     }
//     if (typeof length !== 'number') {
//       throw new TypeError('length mustbe be number')
//     }
//     return `${this.name} is fly at ${length}m.`
//   }
// }

// class MagicSquirrel extends FlySquirrel {
//   /**
//    * @param {[string]} words
//    */
//   constructor(name, color, words) {
//     super(name, color)
//     this.words = words
//   }
//   sayWords() {
//     for (let index = 0; index < this.words.length; index++) {
//       console.log(this.words[index])
//     }
//   }
// }

// try {
//   const Squirrel2 = new Squirrel('Bob', 'red')
//   console.log(Squirrel2.nameSquirrel())
//   console.log(Squirrel2.jump())
//   const FlySquirrel2 = new FlySquirrel('Tom', 'gren')
//   console.log(FlySquirrel2.nameSquirrel())
//   console.log(FlySquirrel2.jump())
//   console.log(FlySquirrel2.fly(45))
//   const MagicSquirrel2 = new MagicSquirrel('Vitya', 'bleak', ['a','b','c'])
//   console.log(MagicSquirrel2.nameSquirrel())
//   console.log(MagicSquirrel2.jump())
//   console.log(MagicSquirrel2.fly(100))
//   console.log(MagicSquirrel2.sayWords())
// } catch (error) {
//   console.log(error)
// }
