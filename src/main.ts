/*
Open/closed principle - Entidades devem estar abertas para extensão,
mas fechadas para modificação.

###############

Liskov substitution principle (Princípio da substituição de Liskov) -
se ø(x) é uma propriedade demonstrativo dos objetos x de tipo T. Então ø(y)
dever ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se um programa espera um Animal, algo do tipo Cachorro
(que herde de Animal) deve servir como qualquer outro animal.

###############

Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçado a depender de types, interfaces ou membros
abstratos que não utilizam

###############

Módulos de alto nível não devem depender de módulos de baixo nível.
Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes.
Detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
classes de alto nível são classes que gerenciam as classes de baixo nível.
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/Customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const temPercentDiscount = new TemPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
//const individualCustomer = new IndividualCustomer('Raul', 'Gomes', '111.222.333-44',);
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '11.222.333/4444-55',
);
/* class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK.');
  }
}
const messagingMock = new MessagingMock(); */
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);
shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
