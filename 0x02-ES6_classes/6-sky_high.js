import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new Error('Type of floors must be a number');
    }
  }

  get floors() { return this._floors; }

  get sqft() { return this._sqft; }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('Type of sqft must be a number');
    }
  }

  set floors(floors) {
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new Error('Type of floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
