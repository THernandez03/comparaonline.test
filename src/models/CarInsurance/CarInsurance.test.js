import CarInsurance from './CarInsurance';
import Product from '../Product';

describe('CarInsurance', () => {
  it('Should receive an array of products', () => {
    let carInsurance;

    carInsurance = new CarInsurance();
    expect(carInsurance.products).toEqual([]);

    const product = new Product('Test', 0, 0);
    carInsurance = new CarInsurance([product]);
    expect(carInsurance.products).toEqual([product]);
  });
});
