class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (!(Object.getOwnPropertyNames(this.constructor.prototype).find((prop) => prop === 'evacuationWarningMessage'))) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }

  get sqft() { return this._sqft; }
}
export default Building;
