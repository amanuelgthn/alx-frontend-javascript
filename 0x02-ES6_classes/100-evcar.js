import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range === 'string') {
      this._range = range;
    } else {
      throw new Error('range must be a string');
    }
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color, this._range);
  }
}

export default EVCar;
