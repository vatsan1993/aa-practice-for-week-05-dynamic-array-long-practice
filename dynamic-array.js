class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    if (index < this.length) {
      return this.data[index];
    }
  }

  push(val) {
    // Your code here
    if (this.length == this.capacity) {
      this.resize();
      //   let newArr = new Array(this.capacity + 5);
      //   for (let i = 0; i < this.data.length; i__) {
      //     newArr[i] = this.data[i];
      //   }
      //   this.data = newArr;
      //   this.capacity += 5;
    }
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    // Your code here
    if (this.length > 0) {
      let val = this.data[this.length - 1];
      this.data[this.length - 1] = null;
      this.length--;
      return val;
    }
  }

  shift() {
    // Your code here
    // Your code here
    if (this.length > 0) {
      let val = this.data[0];

      let newArr = new Array(this.capacity + 5);
      for (let i = 1; i < this.length; i++) {
        this.data[i - 1] = this.data[i];
      }
      this.data[this.data.length - 1] = null;
      this.length--;
      return val;
    }
  }

  unshift(val) {
    // Your code here
    if (this.length == this.capacity) {
      this.resize();
      //   let newArr = new Array(this.capacity + 5);
      //   for (let i = this.length; i >= 1; i--) {
      //     newArr[i] = this.data[i - 1];
      //   }
      //   this.data = newArr;
      //   this.capacity += 5;
    }
    for (let i = this.length; i >= 1; i--) {
      this.data[i] = this.data[i - 1];
    }
    // }

    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    // Your code here
    let newArr = new Array(this.capacity * 2);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.data[i];
    }
    this.data = newArr;
    this.capacity *= 2;
  }
}

module.exports = DynamicArray;
