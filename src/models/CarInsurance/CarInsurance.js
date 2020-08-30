import { increase, decrease } from '../../utils';
import {
  FULL_COVERAGE,
  MEGA_COVERAGE,
  SPECIAL_FULL_COVERAGE,
  SUPER_SALE,
} from '../../constants';

class CarInsurance {
  constructor(products) {
    this.products = products || [];
  }

  #updatePriceByProductName(productName, product) {
    switch (productName) {
      case FULL_COVERAGE:
        return this.#fullCoverageUpdate(product);
      case MEGA_COVERAGE:
        return this.#megaCoverageUpdate(product);
      case SPECIAL_FULL_COVERAGE:
        return this.#specialFullCoverageUpdate(product);
      case SUPER_SALE:
        return this.#superSaleCoverageUpdate(product);
      default:
        return this.#updateNormalPrice(product);
    }
  }

  #fullCoverageUpdate(product) {
    const { sellIn, price } = product;
    let amount = 1;

    if (sellIn <= 0) {
      amount = 2;
    }

    product.sellIn = sellIn - 1;
    product.price = increase(price, amount);

    return product;
  }

  #megaCoverageUpdate(product) {
    return product;
  }

  #specialFullCoverageUpdate(product) {
    const { sellIn, price } = product;
    let amount = 1;

    if (sellIn <= 10) {
      amount = 2;
    }

    if (sellIn <= 5) {
      amount = 3;
    }

    if (sellIn <= 0) {
      product.price = 0;
    } else {
      product.price = increase(price, amount);
    }

    product.sellIn = sellIn - 1;

    return product;
  }

  #superSaleCoverageUpdate(product) {
    return this.#updateNormalPrice(product, 2);
  }

  #updateNormalPrice(product, multiplier = 1) {
    const { sellIn, price } = product;
    let amount = 1 * multiplier;

    if (sellIn <= 0) {
      amount = 2 * multiplier;
    }

    product.sellIn = sellIn - 1;
    product.price = decrease(price, amount);

    return product;
  }

  updatePrice() {
    return this.products.map((product) =>
      this.#updatePriceByProductName(product.name, product),
    );
  }
}

export default CarInsurance;
