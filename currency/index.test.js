const nock = require('nock');
const currency = require('./');

beforeEach(() => {
  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=USD')
    .reply(200, {
      'base': 'USD',
      'rates': {
        'EUR': 0.899
      }
    });

  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=EUR')
    .reply(200, {
      'base': 'EUR',
      'rates': {
        'USD': 1.1122
      }
    });

  nock('https://blockchain.info')
    .get('/ticker')
    .reply(200, {
      'USD': {
        '15m': 8944.49,
        'last': 8944.49,
        'buy': 8944.49,
        'sell': 8944.49,
        'symbol': '$'
      },
      'EUR': {
        '15m': 8048.11,
        'last': 8048.11,
        'buy': 8048.11,
        'sell': 8048.11,
        'symbol': '€'
      }
    });
});


/**
 * For the specific currency convert tests (1-5) 
 * As test values we use an amount equal to 1 unit of currency
 * As expected values we use the values from the different APIs
 * 
 * For the argument convert tests (6-8)
 * As test values we use objects according to the different cases that might occur
 * As expected values we use the default values that are set in cli.js
 */
describe('currency', () => {
  test('should convert 1 USD to EUR', async () => {
    expect(await currency({amount:'1',from:'USD',to:'EUR'})).toBe(0.899);
  });

  test('should convert 1 USD to USD', async () => {
    expect(await currency({amount:'1',from:'USD',to:'USD'})).toBe(1);
  });

  test('should convert 1 EUR to USD', async () => {
    expect(await currency({amount:'1',from:'EUR',to:'USD'})).toBe(1.1122);
  });

  test('should convert 1 BTC to USD', async () => {
    expect(await currency({amount:'1',from:'BTC',to:'USD'})).toBe(8944.49);
  });

  test('should convert 1 BTC to EUR', async () => {
    expect(await currency({amount:'1',from:'BTC',to:'EUR'})).toBe(8048.11);
  });

  test('should convert (with default values) without arguments', async () => {
    expect(await currency({})).toBe(1/8944.49); //default values : {amount:'1',from:'USD',to:'BTC'}
  });

  test('should convert with amount only as argument', async () => {
    expect(await currency({amount:'2'})).toBe(2/8944.49); //adding default values : {amount:'2',from:'USD',to:'BTC'}
  });

  test('should convert with amount and (from) currency only as arguments', async () => {
    expect(await currency({amount:'2',from:'EUR'})).toBe(2/8048.11); //adding default values : {amount:'2',from:'EUR',to:'BTC'}
  });

  test('convert without a correct `from` or `to` currency value', async () => {
    expect(await currency({amount:'2', from:'FOO', to:'BAR'})).toThrowError('Invalid input for `from` or `to` currency. Please try with valid currencies.');
  });
});