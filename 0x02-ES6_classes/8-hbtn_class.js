export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = val;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    }
    if (hint === 'number') {
      return this.size;
    }
    return null;
  }
}
