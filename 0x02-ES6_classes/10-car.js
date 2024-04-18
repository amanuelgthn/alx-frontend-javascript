class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') {
      this._brand = brand;
    } else {
      throw new Error('brand must be a string');
    }
    if (typeof motor === 'string') {
      this._motor = motor;
    } else {
      throw new Error('motor must be a string');
    }
    if (typeof color === 'string') {
      this._color = color;
    } else {
      throw new Error('color must be a string');
    }
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

export default Car;
