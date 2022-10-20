import { IndividualCustomer, EnterpriseCustomer } from './Customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Raul', 'Gomes', '111.222.333-44');
    expect(sut).toHaveProperty('firstName', 'Raul');
    expect(sut).toHaveProperty('lastName', 'Gomes');
    expect(sut).toHaveProperty('cpf', '111.222.333-44');
  });

  it('Should have methods to get name and idn individual', () => {
    const sut = createIndividualCustomer('Raul', 'Gomes', '111.222.333-44');
    expect(sut.getName()).toBe('Raul Gomes');
    expect(sut.getIDN()).toBe('111.222.333-44');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should have name, and cnpj', () => {
    const sut = createEnterpriseCustomer('SMART', '111.222.333-44');
    expect(sut).toHaveProperty('name', 'SMART');
    expect(sut).toHaveProperty('cnpj', '111.222.333-44');
  });

  it('Should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('SMART', '11.222.333/4444-55');
    expect(sut.getName()).toBe('SMART');
    expect(sut.getIDN()).toBe('11.222.333/4444-55');
  });
});
