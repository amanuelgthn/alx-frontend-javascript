import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be a Currency');
    }
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  set amount(amount) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be a Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (((typeof (amount) === 'number')) && ((typeof (conversionRate)) === 'number')) {
      return amount * conversionRate;
    }

    throw new TypeError('amount and conversionRate must be a number');
  }
}

export default Pricing;
