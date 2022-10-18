/*
sudo npm install -g jest
npx jest --init
####Comando####
npx jest
####Teste####
describe('TESTANDO ALGUMA COISA', () => {
  it('Should return one.(IT)', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('TESTANDO OUTRA COISA', () => {
  test('Should return Raul.(TESTE)', () => {
    const name = 'Raul';
    expect(name).toBe('Raul');
  });
});
*/
import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    //System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
