import CarInsurance from './CarInsurance';
import Product from '../Product/Product';
import {
  LOW_COVERAGE,
  MEDIUM_COVERAGE,
  FULL_COVERAGE,
  MEGA_COVERAGE,
  SPECIAL_FULL_COVERAGE,
  SUPER_SALE,
} from '../../constants';

describe('CarInsurance', () => {
  it('Should receive an array of products', () => {
    let carInsurance;

    carInsurance = new CarInsurance();
    expect(carInsurance.products).toEqual([]);

    const product = new Product('Test', 0, 0);
    carInsurance = new CarInsurance([product]);
    expect(carInsurance.products).toEqual([product]);
  });

  it('Should have a method to updatePrice', () => {
    const carInsurance = new CarInsurance();
    expect(carInsurance.updatePrice).toBeDefined();
  });

  it('Should control price updates for "Full Coverage"', () => {
    const fullCoverageSteps = [
      new Product(FULL_COVERAGE, 1, 1),
      new Product(FULL_COVERAGE, 0, 2),
      new Product(FULL_COVERAGE, -1, 4),
      new Product(FULL_COVERAGE, -2, 6),
      new Product(FULL_COVERAGE, -3, 8),
      new Product(FULL_COVERAGE, -4, 10),
      new Product(FULL_COVERAGE, -5, 12),
      new Product(FULL_COVERAGE, -6, 14),
      new Product(FULL_COVERAGE, -7, 16),
      new Product(FULL_COVERAGE, -8, 18),
      new Product(FULL_COVERAGE, -9, 20),
      new Product(FULL_COVERAGE, -10, 22),
      new Product(FULL_COVERAGE, -11, 24),
      new Product(FULL_COVERAGE, -12, 26),
      new Product(FULL_COVERAGE, -13, 28),
      new Product(FULL_COVERAGE, -14, 30),
      new Product(FULL_COVERAGE, -15, 32),
      new Product(FULL_COVERAGE, -16, 34),
      new Product(FULL_COVERAGE, -17, 36),
      new Product(FULL_COVERAGE, -18, 38),
      new Product(FULL_COVERAGE, -19, 40),
      new Product(FULL_COVERAGE, -20, 42),
      new Product(FULL_COVERAGE, -21, 44),
      new Product(FULL_COVERAGE, -22, 46),
      new Product(FULL_COVERAGE, -23, 48),
      new Product(FULL_COVERAGE, -24, 50),
      new Product(FULL_COVERAGE, -25, 50),
      new Product(FULL_COVERAGE, -26, 50),
      new Product(FULL_COVERAGE, -27, 50),
      new Product(FULL_COVERAGE, -28, 50),
    ];
    const fullCoverage = new Product(FULL_COVERAGE, 2, 0);
    const carInsurance = new CarInsurance([fullCoverage]);
    [...new Array(30).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([fullCoverageSteps[index]]);
    });
  });

  it('Should control price updates for "Mega Coverage"', () => {
    let megaCoverageSteps;
    let megaCoverage;
    let carInsurance;

    megaCoverageSteps = [
      new Product(MEGA_COVERAGE, 0, 80),
      new Product(MEGA_COVERAGE, 0, 80),
    ];
    megaCoverage = new Product(MEGA_COVERAGE, 0, 80);
    carInsurance = new CarInsurance([megaCoverage]);
    [...new Array(2).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([megaCoverageSteps[index]]);
    });

    megaCoverageSteps = [
      new Product(MEGA_COVERAGE, -1, 80),
      new Product(MEGA_COVERAGE, -1, 80),
    ];
    megaCoverage = new Product(MEGA_COVERAGE, -1, 80);
    carInsurance = new CarInsurance([megaCoverage]);
    [...new Array(2).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([megaCoverageSteps[index]]);
    });
  });

  it('Should control price updates for "Special Full Coverage"', () => {
    let specialFullCoverageSteps;
    let specialFullCoverage;
    let carInsurance;

    specialFullCoverageSteps = [
      new Product(SPECIAL_FULL_COVERAGE, 14, 21),
      new Product(SPECIAL_FULL_COVERAGE, 13, 22),
      new Product(SPECIAL_FULL_COVERAGE, 12, 23),
      new Product(SPECIAL_FULL_COVERAGE, 11, 24),
      new Product(SPECIAL_FULL_COVERAGE, 10, 25),
      new Product(SPECIAL_FULL_COVERAGE, 9, 27),
      new Product(SPECIAL_FULL_COVERAGE, 8, 29),
      new Product(SPECIAL_FULL_COVERAGE, 7, 31),
      new Product(SPECIAL_FULL_COVERAGE, 6, 33),
      new Product(SPECIAL_FULL_COVERAGE, 5, 35),
      new Product(SPECIAL_FULL_COVERAGE, 4, 38),
      new Product(SPECIAL_FULL_COVERAGE, 3, 41),
      new Product(SPECIAL_FULL_COVERAGE, 2, 44),
      new Product(SPECIAL_FULL_COVERAGE, 1, 47),
      new Product(SPECIAL_FULL_COVERAGE, 0, 50),
      new Product(SPECIAL_FULL_COVERAGE, -1, 0),
      new Product(SPECIAL_FULL_COVERAGE, -2, 0),
      new Product(SPECIAL_FULL_COVERAGE, -3, 0),
      new Product(SPECIAL_FULL_COVERAGE, -4, 0),
      new Product(SPECIAL_FULL_COVERAGE, -5, 0),
      new Product(SPECIAL_FULL_COVERAGE, -6, 0),
      new Product(SPECIAL_FULL_COVERAGE, -7, 0),
      new Product(SPECIAL_FULL_COVERAGE, -8, 0),
      new Product(SPECIAL_FULL_COVERAGE, -9, 0),
      new Product(SPECIAL_FULL_COVERAGE, -10, 0),
      new Product(SPECIAL_FULL_COVERAGE, -11, 0),
      new Product(SPECIAL_FULL_COVERAGE, -12, 0),
      new Product(SPECIAL_FULL_COVERAGE, -13, 0),
      new Product(SPECIAL_FULL_COVERAGE, -14, 0),
      new Product(SPECIAL_FULL_COVERAGE, -15, 0),
    ];
    specialFullCoverage = new Product(SPECIAL_FULL_COVERAGE, 15, 20);
    carInsurance = new CarInsurance([specialFullCoverage]);
    [...new Array(30).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([specialFullCoverageSteps[index]]);
    });

    specialFullCoverageSteps = [
      new Product(SPECIAL_FULL_COVERAGE, 9, 50),
      new Product(SPECIAL_FULL_COVERAGE, 8, 50),
      new Product(SPECIAL_FULL_COVERAGE, 7, 50),
      new Product(SPECIAL_FULL_COVERAGE, 6, 50),
      new Product(SPECIAL_FULL_COVERAGE, 5, 50),
      new Product(SPECIAL_FULL_COVERAGE, 4, 50),
      new Product(SPECIAL_FULL_COVERAGE, 3, 50),
      new Product(SPECIAL_FULL_COVERAGE, 2, 50),
      new Product(SPECIAL_FULL_COVERAGE, 1, 50),
      new Product(SPECIAL_FULL_COVERAGE, 0, 50),
      new Product(SPECIAL_FULL_COVERAGE, -1, 0),
      new Product(SPECIAL_FULL_COVERAGE, -2, 0),
      new Product(SPECIAL_FULL_COVERAGE, -3, 0),
      new Product(SPECIAL_FULL_COVERAGE, -4, 0),
      new Product(SPECIAL_FULL_COVERAGE, -5, 0),
      new Product(SPECIAL_FULL_COVERAGE, -6, 0),
      new Product(SPECIAL_FULL_COVERAGE, -7, 0),
      new Product(SPECIAL_FULL_COVERAGE, -8, 0),
      new Product(SPECIAL_FULL_COVERAGE, -9, 0),
      new Product(SPECIAL_FULL_COVERAGE, -10, 0),
      new Product(SPECIAL_FULL_COVERAGE, -11, 0),
      new Product(SPECIAL_FULL_COVERAGE, -12, 0),
      new Product(SPECIAL_FULL_COVERAGE, -13, 0),
      new Product(SPECIAL_FULL_COVERAGE, -14, 0),
      new Product(SPECIAL_FULL_COVERAGE, -15, 0),
      new Product(SPECIAL_FULL_COVERAGE, -16, 0),
      new Product(SPECIAL_FULL_COVERAGE, -17, 0),
      new Product(SPECIAL_FULL_COVERAGE, -18, 0),
      new Product(SPECIAL_FULL_COVERAGE, -19, 0),
      new Product(SPECIAL_FULL_COVERAGE, -20, 0),
    ];
    specialFullCoverage = new Product(SPECIAL_FULL_COVERAGE, 10, 49);
    carInsurance = new CarInsurance([specialFullCoverage]);
    [...new Array(30).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([specialFullCoverageSteps[index]]);
    });

    specialFullCoverageSteps = [
      new Product(SPECIAL_FULL_COVERAGE, 4, 50),
      new Product(SPECIAL_FULL_COVERAGE, 3, 50),
      new Product(SPECIAL_FULL_COVERAGE, 2, 50),
      new Product(SPECIAL_FULL_COVERAGE, 1, 50),
      new Product(SPECIAL_FULL_COVERAGE, 0, 50),
      new Product(SPECIAL_FULL_COVERAGE, -1, 0),
      new Product(SPECIAL_FULL_COVERAGE, -2, 0),
      new Product(SPECIAL_FULL_COVERAGE, -3, 0),
      new Product(SPECIAL_FULL_COVERAGE, -4, 0),
      new Product(SPECIAL_FULL_COVERAGE, -5, 0),
      new Product(SPECIAL_FULL_COVERAGE, -6, 0),
      new Product(SPECIAL_FULL_COVERAGE, -7, 0),
      new Product(SPECIAL_FULL_COVERAGE, -8, 0),
      new Product(SPECIAL_FULL_COVERAGE, -9, 0),
      new Product(SPECIAL_FULL_COVERAGE, -10, 0),
      new Product(SPECIAL_FULL_COVERAGE, -11, 0),
      new Product(SPECIAL_FULL_COVERAGE, -12, 0),
      new Product(SPECIAL_FULL_COVERAGE, -13, 0),
      new Product(SPECIAL_FULL_COVERAGE, -14, 0),
      new Product(SPECIAL_FULL_COVERAGE, -15, 0),
      new Product(SPECIAL_FULL_COVERAGE, -16, 0),
      new Product(SPECIAL_FULL_COVERAGE, -17, 0),
      new Product(SPECIAL_FULL_COVERAGE, -18, 0),
      new Product(SPECIAL_FULL_COVERAGE, -19, 0),
      new Product(SPECIAL_FULL_COVERAGE, -20, 0),
      new Product(SPECIAL_FULL_COVERAGE, -21, 0),
      new Product(SPECIAL_FULL_COVERAGE, -22, 0),
      new Product(SPECIAL_FULL_COVERAGE, -23, 0),
      new Product(SPECIAL_FULL_COVERAGE, -24, 0),
      new Product(SPECIAL_FULL_COVERAGE, -25, 0),
    ];
    specialFullCoverage = new Product(SPECIAL_FULL_COVERAGE, 5, 49);
    carInsurance = new CarInsurance([specialFullCoverage]);
    [...new Array(30).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([specialFullCoverageSteps[index]]);
    });
  });

  it('Should control price updates for "Super Sale"', () => {
    let superSaleCoverageSteps;
    let superSaleCoverage;
    let carInsurance;

    superSaleCoverageSteps = [
      new Product(SUPER_SALE, 2, 4),
      new Product(SUPER_SALE, 1, 2),
      new Product(SUPER_SALE, 0, 0),
      new Product(SUPER_SALE, -1, 0),
      new Product(SUPER_SALE, -2, 0),
    ];
    superSaleCoverage = new Product(SUPER_SALE, 3, 6);
    carInsurance = new CarInsurance([superSaleCoverage]);
    [...new Array(5).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([superSaleCoverageSteps[index]]);
    });

    superSaleCoverageSteps = [
      new Product(SUPER_SALE, 5, 20),
      new Product(SUPER_SALE, 4, 18),
      new Product(SUPER_SALE, 3, 16),
      new Product(SUPER_SALE, 2, 14),
      new Product(SUPER_SALE, 1, 12),
      new Product(SUPER_SALE, 0, 10),
      new Product(SUPER_SALE, -1, 6),
      new Product(SUPER_SALE, -2, 2),
      new Product(SUPER_SALE, -3, 0),
      new Product(SUPER_SALE, -4, 0),
    ];
    superSaleCoverage = new Product(SUPER_SALE, 6, 22);
    carInsurance = new CarInsurance([superSaleCoverage]);
    [...new Array(10).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([superSaleCoverageSteps[index]]);
    });
  });

  it('Should control price updates for "Other" types of sale', () => {
    let carInsurance;

    const mediumCoverageSteps = [
      new Product(MEDIUM_COVERAGE, 9, 19),
      new Product(MEDIUM_COVERAGE, 8, 18),
      new Product(MEDIUM_COVERAGE, 7, 17),
      new Product(MEDIUM_COVERAGE, 6, 16),
      new Product(MEDIUM_COVERAGE, 5, 15),
      new Product(MEDIUM_COVERAGE, 4, 14),
      new Product(MEDIUM_COVERAGE, 3, 13),
      new Product(MEDIUM_COVERAGE, 2, 12),
      new Product(MEDIUM_COVERAGE, 1, 11),
      new Product(MEDIUM_COVERAGE, 0, 10),
      new Product(MEDIUM_COVERAGE, -1, 8),
      new Product(MEDIUM_COVERAGE, -2, 6),
      new Product(MEDIUM_COVERAGE, -3, 4),
      new Product(MEDIUM_COVERAGE, -4, 2),
      new Product(MEDIUM_COVERAGE, -5, 0),
      new Product(MEDIUM_COVERAGE, -6, 0),
      new Product(MEDIUM_COVERAGE, -7, 0),
      new Product(MEDIUM_COVERAGE, -8, 0),
      new Product(MEDIUM_COVERAGE, -9, 0),
      new Product(MEDIUM_COVERAGE, -10, 0),
      new Product(MEDIUM_COVERAGE, -11, 0),
      new Product(MEDIUM_COVERAGE, -12, 0),
      new Product(MEDIUM_COVERAGE, -13, 0),
      new Product(MEDIUM_COVERAGE, -14, 0),
      new Product(MEDIUM_COVERAGE, -15, 0),
      new Product(MEDIUM_COVERAGE, -16, 0),
      new Product(MEDIUM_COVERAGE, -17, 0),
      new Product(MEDIUM_COVERAGE, -18, 0),
      new Product(MEDIUM_COVERAGE, -19, 0),
      new Product(MEDIUM_COVERAGE, -20, 0),
    ];
    const mediumCoverage = new Product(MEDIUM_COVERAGE, 10, 20);
    carInsurance = new CarInsurance([mediumCoverage]);
    [...new Array(30).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([mediumCoverageSteps[index]]);
    });

    const lowCoverageSteps = [
      new Product(LOW_COVERAGE, 4, 6),
      new Product(LOW_COVERAGE, 3, 5),
      new Product(LOW_COVERAGE, 2, 4),
      new Product(LOW_COVERAGE, 1, 3),
      new Product(LOW_COVERAGE, 0, 2),
      new Product(LOW_COVERAGE, -1, 0),
      new Product(LOW_COVERAGE, -2, 0),
      new Product(LOW_COVERAGE, -3, 0),
      new Product(LOW_COVERAGE, -4, 0),
      new Product(LOW_COVERAGE, -5, 0),
      new Product(LOW_COVERAGE, -6, 0),
      new Product(LOW_COVERAGE, -7, 0),
      new Product(LOW_COVERAGE, -8, 0),
      new Product(LOW_COVERAGE, -9, 0),
      new Product(LOW_COVERAGE, -10, 0),
      new Product(LOW_COVERAGE, -11, 0),
      new Product(LOW_COVERAGE, -12, 0),
      new Product(LOW_COVERAGE, -13, 0),
      new Product(LOW_COVERAGE, -14, 0),
      new Product(LOW_COVERAGE, -15, 0),
      new Product(LOW_COVERAGE, -16, 0),
      new Product(LOW_COVERAGE, -17, 0),
      new Product(LOW_COVERAGE, -18, 0),
      new Product(LOW_COVERAGE, -19, 0),
      new Product(LOW_COVERAGE, -20, 0),
      new Product(LOW_COVERAGE, -21, 0),
      new Product(LOW_COVERAGE, -22, 0),
      new Product(LOW_COVERAGE, -23, 0),
      new Product(LOW_COVERAGE, -24, 0),
      new Product(LOW_COVERAGE, -25, 0),
    ];
    const lowCoverage = new Product(LOW_COVERAGE, 5, 7);
    carInsurance = new CarInsurance([lowCoverage]);
    [...new Array(30).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([lowCoverageSteps[index]]);
    });

    const customCoverageSteps = [
      new Product('CUSTOM_COVERAGE', 4, 6),
      new Product('CUSTOM_COVERAGE', 3, 5),
      new Product('CUSTOM_COVERAGE', 2, 4),
      new Product('CUSTOM_COVERAGE', 1, 3),
      new Product('CUSTOM_COVERAGE', 0, 2),
      new Product('CUSTOM_COVERAGE', -1, 0),
      new Product('CUSTOM_COVERAGE', -2, 0),
      new Product('CUSTOM_COVERAGE', -3, 0),
      new Product('CUSTOM_COVERAGE', -4, 0),
      new Product('CUSTOM_COVERAGE', -5, 0),
      new Product('CUSTOM_COVERAGE', -6, 0),
      new Product('CUSTOM_COVERAGE', -7, 0),
      new Product('CUSTOM_COVERAGE', -8, 0),
      new Product('CUSTOM_COVERAGE', -9, 0),
      new Product('CUSTOM_COVERAGE', -10, 0),
      new Product('CUSTOM_COVERAGE', -11, 0),
      new Product('CUSTOM_COVERAGE', -12, 0),
      new Product('CUSTOM_COVERAGE', -13, 0),
      new Product('CUSTOM_COVERAGE', -14, 0),
      new Product('CUSTOM_COVERAGE', -15, 0),
      new Product('CUSTOM_COVERAGE', -16, 0),
      new Product('CUSTOM_COVERAGE', -17, 0),
      new Product('CUSTOM_COVERAGE', -18, 0),
      new Product('CUSTOM_COVERAGE', -19, 0),
      new Product('CUSTOM_COVERAGE', -20, 0),
      new Product('CUSTOM_COVERAGE', -21, 0),
      new Product('CUSTOM_COVERAGE', -22, 0),
      new Product('CUSTOM_COVERAGE', -23, 0),
      new Product('CUSTOM_COVERAGE', -24, 0),
      new Product('CUSTOM_COVERAGE', -25, 0),
    ];
    const customCoverage = new Product('CUSTOM_COVERAGE', 5, 7);
    carInsurance = new CarInsurance([customCoverage]);
    [...new Array(30).keys()].forEach((index) => {
      carInsurance.updatePrice();
      expect(carInsurance.products).toEqual([customCoverageSteps[index]]);
    });
  });
});
