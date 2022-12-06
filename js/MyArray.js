function MyArrayPrototype() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      //перебираємо кожен аргумент
      this[this.length++] = arguments[i] //значення аргументу
    }
    return this.length
  }

  this.pop = function () {
    if (this.length === 0) {
      return
    }
    const lastItem = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    return lastItem
  }

  this.some = function (funcCheck) {
    for (let i = 0; i < this.length; i++) {
      if (funcCheck(this[i]) === true) {
        return true
      }
    }
    return false
  }

  this.every = function (funcCheck) {
    for (let i = 0; i < this.length; i++) {
      if (funcCheck(this[i]) === false) {
        return false
      }
    }
    return true
  }

  this.forEach = function (funcWork) {
    for (let i = 0; i < this.length; i++) {
      funcWork(this[i])
    }
  }

  this.filter = function (funcCheck) {
    const newArr = new MyArray()
    for (let i = 0; i < this.length; i++) {
      if (funcCheck(this[i])) {
        newArr.push(this[i])
      }
    }
    return newArr
  }

  this.map = function (funcWork) {
    const newArr = new MyArray()
    for (let i = 0; i < this.length; i++) {
      newArr.push(funcWork(this[i]))
    }
    return newArr
  }
}
function MyArray() {
  this.length = 0
  if (arguments.length === 1) {
    for (let i = 0; i < arguments[0]; i++) {
      this.push(undefined)
    }
    return
  }
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i])
  }
}

MyArray.prototype = new MyArrayPrototype()

const myArr = new MyArray()
myArr.push(12, 14, 12)
myArr.push(56)

function logItem(v) {
  console.log(v)
}

const MyArr2 = new MyArray()
