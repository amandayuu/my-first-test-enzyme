import React from 'react';
import request from 'supertest';
import Enzyme, { shallow } from 'enzyme';
import Pokemon from './pokemon';

const server = 'https://pokeapi.co/api/v2/pokemon';

describe('GET pokemon 1', () => {
  it('Should retrive name into response', async () => {
    const data = await request(server)
      .get('/1')
      .then((res) => res.body);

    const { name } = data;
    expect(name).toBe('bulbasaur');
  });

  it('Should get status 200', async () => {
    const status = await request(server)
      .get('/1')
      .then((res) => res.statusCode);

    expect(status).toBe(200);
  });
});

describe('Render Pokemon', () => {
  it('Should render pokemon component', () => {
    const wrapper = shallow(<Pokemon name={'bulbassaur'} types="Grass" />);
    const pokemon = wrapper.exists();

    expect(pokemon).toBe(true);
  });

  it('Should render pokemon name', () => {
    const wrapper = shallow(<Pokemon name={'bulbassaur'} types="Grass" />);
    const name = wrapper.find('h1').getElement();

    expect(name).toStrictEqual(<h1>bulbassaur</h1>);
  });

  it('Should render pokemon type', () => {
    const wrapper = shallow(<Pokemon name={'bulbassaur'} types="Grass" />);
    const types = wrapper.find('label').getElement();
    expect(types).toStrictEqual(<label>Grass</label>);
  });

  it('Should render name with request', async () => {
    const data = await request(server)
      .get('/1')
      .then((res) => res.body);
    const { name, types } = data;
    console.log(name, types);
    const wrapper = shallow(<Pokemon name={name} />);
    const pokemonName = wrapper.find('h1').getElement();

    expect(pokemonName).toStrictEqual(<h1>bulbasaur</h1>);
  });

  it('Should render types with request', async () => {
    const data = await request(server)
      .get('/1')
      .then((res) => res.body);
    const { types } = data;
    const typesLabel = types.map((t) => t.type.name);
    console.log(typesLabel);
    const wrapper = shallow(<Pokemon types={typesLabel} />);
    const pokemonName = wrapper.find('label').getElement();

    //prettier-ignore
    expect(pokemonName).toContain(<label>{"grass "+"\n"+" poison"}</label>);
  });
});
