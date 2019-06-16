import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ('fetchPetition', () => {
  expect(data.Brastlewark[0].name).toBe("Tobus Quickwhistle");
})
