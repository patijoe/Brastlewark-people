import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

const population = [
  {
    id: 9,
    name: 'patri',
    thumbnail: 'https://estaticos.elperiodico.com/resources/jpg/1/3/1554908865931.jpg'
  },
  {
    id: 8,
    name: 'julia',
    thumbnail: 'https://estaticos.elperiodico.com/resources/jpg/1/3/1554908865931.jpg'
  }
];

const filterName = '';

describe('Home component', () => {

  it('matches the snapshot', () => {
    const component = create(
    <Router>
      <Home 
        population={population}
        filterName={filterName}
      />
    </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

});