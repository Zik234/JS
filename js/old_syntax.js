// 'use strict';
//constructor object
function User(fname, iname, age) {
  this.fname = fname
  this.iname = iname
  this.age = age
}
//static
User.isUser = function (value) {
  return (value instanceof User)
}
//constructor logic
function UserPrototype() {
  this.fullName = function () {
    return `${this.fname} ${this.iname}`
  }
}

User.prototype = new UserPrototype()

const obj = {}
const persone1 = new User('Bred', 'Pitt', 58)
// console.log(persone1.fullName())
// console.log(User.isUser(persone1))
// console.log(User.isUser(obj))
