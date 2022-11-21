function MyArrayPrototype() {
  this.push = function (value) {
    this[this.length++] = value;
    return this.length;
  };
  this.pop = function () {
    //перевіряємо жовжину, щоб не стала від'ємною
    if(this.length === 0){
        return;
    }
    //отримати останній ш зберегти у змінну
    const lastItem = this[this.length-1];
    //видалити останній
    delete this[this.length-1];
    //змінити довжину
    this.length--;
    //повернути останній зі змінною
    return lastItem;
  }
}
function MyArray() {
  this.length = 0
}
MyArray.prototype = new MyArrayPrototype()
const myArr = new MyArray()
myArr.push(12);
myArr.push(56);
