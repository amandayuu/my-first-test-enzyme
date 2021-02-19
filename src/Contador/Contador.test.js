import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contador from './Contador';

Enzyme.configure({
  adapter: new Adapter(),
});

let wrapper;
beforeEach(() => {
  // Shallow: quando referenciamos o component com esse método, é possível apenas ver os elementos desse component
  // O método é capaz de identificar outros components mas não consegue acessá-los
  // Nesse caso o component é identificado como uma unidade
  wrapper = shallow(<Contador />);
});

describe('Render without errors', () => {
  it('Verify if exists Increment Button', () => {
    // Pegamos uma referência via id (poderia ser via className) que seria o #incrementBtn
    // Verificando se existe uma string Increment
    const button = wrapper.find('#incrementBtn').text();
    expect(button).toBe('Increment');
  });

  it('Verify if exists Decrement Button', () => {
    const button = wrapper.find('#decrementBtn').text();
    expect(button).toBe('Decrement');
  });
});

// Criar testes para simular a mudança de estado
describe('Changing state without erros', () => {
  // Procuramos a class 'counter' e verificamos o valor dela (ou seja, o estado)
  it('Verify if exists the counter state', () => {
    const counter = wrapper.find('.counter').text();
    expect(counter).toBe('0');
  });
});

describe('Calls function', () => {
  it('Verify when clicking on increment button the state change', () => {
    // Procurando o element com o id incrementBtn onde será simulado o evento click
    wrapper.find('#incrementBtn').simulate('click');
    const counter = wrapper.find('.counter').text();

    // É esperado como o novo estado o valor 1
    expect(counter).toBe('1');
  });

  it('verify when clicking on decrement button the state change', () => {
    // Procurando o element com id decrementBtn, onde será simulado o evento click
    wrapper.find('#decrementBtn').simulate('click');
    const counter = wrapper.find('.counter').text();

    //É esperado como o novo estado o valor 1
    expect(counter).toBe('-1');
  });
});

describe('Showing MyComponent code', () => {
  it('Show Contador.js code, and it should have <MyComponent /> tag', () => {
    const testShallow = wrapper;

    // Nesse exemplo é possível acessar o código do Contador.js
    // também importamos o componente <MyComponent /> no arquivo Contador.js
    // apesar do shallow conseguir ver tudo que possui dentro do Contador.js, ele não é capaz de acessar o que <MyComponent /> possui
    console.log(testShallow.debug());
  });
});
