'use strict'

class MyArrayIterator{
  constructor(myArrayInstance){
    this.myArrayInstance = myArrayInstance
    this.currentIndexItem = 0
  }
  next(){
    return{
      value: this.myArrayInstance[this.currentIndexItem++],
      done: this.currentIndexItem>this.myArrayInstance.length,
    }
  }
}

class MyArrayClass {
  constructor() {
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
  push() {
    for (let i = 0; i < arguments.length; i++) {
      //перебираємо кожен аргумент
      this[this.length++] = arguments[i] //значення аргументу
    }
    return this.length
  }

  static isMyArrayClass(obj) {
    return obj instanceof MyArrayClass
  }

  pop() {
    if (this.length === 0) {
      return
    }
    const lastItem = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    return lastItem
  }

  some(funcCheck) {
    for (let i = 0; i < this.length; i++) {
      if (funcCheck(this[i]) === true) {
        return true
      }
    }
    return false
  }

  every(funcCheck) {
    for (let i = 0; i < this.length; i++) {
      if (funcCheck(this[i]) === false) {
        return false
      }
    }
    return true
  }

  forEach(funcWork) {
    for (let i = 0; i < this.length; i++) {
      funcWork(this[i])
    }
  }

  filter(funcCheck) {
    const newArr = new MyArray()
    for (let i = 0; i < this.length; i++) {
      if (funcCheck(this[i])) {
        newArr.push(this[i])
      }
    }
    return newArr
  }

  map(funcWork) {
    const newArr = new MyArray()
    for (let i = 0; i < this.length; i++) {
      newArr.push(funcWork(this[i]))
    }
    return newArr
  }

  concat(myInstansce) {
    const result = new MyArrayClass()
    this.forEach((item) => {
      result.push(item)
    })
    myInstansce.forEach((item) => {
      result.push(item)
    })
    return result
  }

  flat(depth = 1) {
    let result = new MyArrayClass()
    //перебираємо джерельний масив
    this.forEach((item) => {
      //перевіряємо кожен елемент масиву на належність до нашого класу
      if (MyArrayClass.isMyArrayClass(item) && depth > 0) {
        //підняти на рівень вище
        // const subResult = item.flat(depth - 1)
        //проміжний результат приклеюємо до основного
        result = result.concat(item.flat(depth - 1))
      } else if (item !== undefined) {
        //не піднімати елемент,а додати в кінець масиву
        result.push(item)
      }
    })
    return result
  }

  [Symbol.iterator](){
    return new MyArrayIterator(this)
  }

  // [Symbol.iterator](){
  //   let i = 0
  //   const myArr =this
  //   return{
  //     next:function(){
  //       return{
  //         value:myArr[i++],
  //         done:i>myArr.length,
  //       }
  //     }
  //   }
  // }
}

// const myArr3 = new MyArrayClass(
//   1,
//   1,
//   new MyArrayClass(
//     2,
//     2,
//     new MyArrayClass(3, new MyArrayClass(4, 4, 4), 3, 3),
//     2,
//   ),
//   1,
//   undefined,
//   1,
//   1,
// )
// console.log(myArr3)
// const arrMyFlat = myArr3.flat(10)
// console.log(...arrMyFlat)

// function sum(...rest){
//   return rest.reduce((acc, item)=>acc+item)
// }

// for (const iterator of arrMyFlat) {
//   console.log(iterator)
// }
