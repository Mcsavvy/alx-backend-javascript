export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if ((this.constructor !== Building) && (typeof this.evacuationWarningMessage !== 'function')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = val;
  }
}
