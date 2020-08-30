import { increase, decrease } from './price';

describe('increase()', () => {
  it('Should increase the price', () => {
    expect(increase(10)).toEqual(10);
    expect(increase(10, 1)).toEqual(11);
    expect(increase(10, 5)).toEqual(15);
    expect(increase(10, 55)).toEqual(50);
    expect(increase(10, 10, 15)).toEqual(15);
  });
});

describe('decrease()', () => {
  it('Should decrease the price', () => {
    expect(decrease(10)).toEqual(10);
    expect(decrease(10, 1)).toEqual(9);
    expect(decrease(10, 5)).toEqual(5);
    expect(decrease(10, 15)).toEqual(0);
    expect(decrease(10, 15, -5)).toEqual(-5);
  });
});
