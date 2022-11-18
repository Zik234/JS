function MyArrayPrototype() {
    this.push = function(value){
      this[this.length] = value;
      this.length++;
      return this.length;
  }
  }