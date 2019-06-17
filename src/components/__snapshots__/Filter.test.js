import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from './Filter';

escribe('Filter component', () => {

  it('matches the snapshot in filter component', () => {
    const component = create(
    <Router>
      <Filter
      />
    </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

});