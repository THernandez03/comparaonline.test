import Product from './Product';

describe('Product', () => {
  it('Should receive params in the constructor', () => {
    const product = new Product('test', 1, 2);
    expect(product.name).toEqual('test');
    expect(product.sellIn).toEqual(1);
    expect(product.price).toEqual(2);
  });
});
