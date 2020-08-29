import { Product, CarInsurance } from './models';
import {
  LOW_COVERAGE,
  MEDIUM_COVERAGE,
  FULL_COVERAGE,
  MEGA_COVERAGE,
  SPECIAL_FULL_COVERAGE,
  SUPER_SALE,
} from './constants';

const productsAtDayZero = [
  new Product(MEDIUM_COVERAGE, 10, 20),
  new Product(FULL_COVERAGE, 2, 0),
  new Product(LOW_COVERAGE, 5, 7),
  new Product(MEGA_COVERAGE, 0, 80),
  new Product(MEGA_COVERAGE, -1, 80),
  new Product(SPECIAL_FULL_COVERAGE, 15, 20),
  new Product(SPECIAL_FULL_COVERAGE, 10, 49),
  new Product(SPECIAL_FULL_COVERAGE, 5, 49),
  new Product(SUPER_SALE, 3, 6),
];

// const carInsurance = new CarInsurance(productsAtDayZero);
// const productPrinter = function (product) {
//   console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
// };

// for (let i = 1; i <= 30; i += 1) {
//   console.log(`Day ${i}`);
//   console.log("name, sellIn, price");
//   carInsurance.updatePrice().forEach(productPrinter);
//   console.log("");
// }
