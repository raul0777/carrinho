import {
  CustomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lasName: string;
  cpf: string;

  constructor(firstName: string, lasName: string, cpf: string) {
    this.firstName = firstName;
    this.lasName = lasName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstName + ' ' + this.lasName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
