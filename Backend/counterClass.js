class Count {
  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }
  getValue() {
    return this.counter;
  }
}

module.exports = Count;
