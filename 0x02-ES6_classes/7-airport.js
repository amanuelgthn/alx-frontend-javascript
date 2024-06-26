class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('name must be a string');
    }
    if (typeof code === 'string') { this._code = code; } else { throw new Error('code must be a string'); }
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}

export default Airport;
