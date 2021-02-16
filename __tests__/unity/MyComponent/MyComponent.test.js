import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from './MyComponent';

Enzyme.configure({
    adapter: new Adapter()
})

describe('Testing Component: render without errors', () => {

    let wrapper;

    // Criamos o beforeEach para ser reutilizado no código, deixando ele mais enxuto.    // 
    // beforeEach é uma função própria do Jest.
    // Em todo bloco de código a ser testado, ele roda esse método antes de cada teste

    beforeEach(() => {

        // Shallow é um método do Enzyme
        // wrapper é o component a ser testado
        // Aqui encapsulamos o wrapper com o intuito de diminuir a escrita do código
        wrapper = shallow(<MyComponent />);
    })
    
    // Realizando uma soma simples, onde o resultado esperado é 3
    it('Simple sum', () => {
        expect(1+2).toBe(3);
    })

    it('Should looking from `Hello World` test in tag H1', () => {

        // Atribuimos constante que queremos testar no component
        // Queremos encontrar a tag <h1>
        // o text() do Enzyme transformar esse render HTML em string
        const elementToBeTested = wrapper.find('h1').text();

        //Onde ocorre o teste. É verificado se o elemento que está sendo testado possui a string 'Hello World'
        expect(elementToBeTested).toBe('Hello World');
    });

    it('Verify if exist the div `component` in component', () => {
        const component = <div className="component"></div>;
        const elementToBeTested = wrapper.contains(component);
        expect(elementToBeTested).toBe(true);
    })
})

