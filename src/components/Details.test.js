import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from './Details';

const population = [
  {
    thumbnail: 'https://estaticos.elperiodico.com/resources/jpg/1/3/1554908865931.jpg',
    name: 'lola',
    age: 14,
    weight: 50,
    height: 161,
    hair_color: 'brown',
    proffesions: ['fronEnd'],
    friends: ['mario']
  }
]

const match = {
  params: {
    id: 1 
  }
};

describe('Details component', () => {
  it('matches the snapshot in Details component', () => {
    const component = create (
      <Router>
        <Details match={match} population={population} />
      </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});