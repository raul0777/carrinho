import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TemPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('Should apply 50% discount on price', () => {
    const sut = createSut(TemPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
