/*
sudo npm install -g jest
npx jest --init
####Comando####
npx jest
*/
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
