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

  this.forEach = function (funcWork) {
    for (let i = 0; i < this.length; i++) {
      funcWork(this[i])
    }
  }

  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        return true
      }
    }
    return false
  }

  this.every = function(func){
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])=== false) {
        return false
      }
    }
    return true
  }

  this.filter = function(funcCheck){
    const newArr= new MyArray()
    for (let i = 0; i < this.length; i++) {
      if(funcCheck(this[i])){
        newArr.push(this[i])
      }
    }
    return newArr
  }

  this.map = function(funcWork){
    const newArr= new MyArray()
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

const myArr = new MyArray(4, 5, 5, 8)
myArr.push(12, 14, 12)
myArr.push(56)
