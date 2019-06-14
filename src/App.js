import React from 'react';
import {petition} from './services/petition';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      population: []
    }
  }

  componentDidMount() {
    this.fetchPetition();
  }

  fetchPetition(){
    petition()
    .then(data => {
      console.log('*', data);
    })
  }

  render() {
    const {population} = this.state;

    return (
      <div className="app">
      <ul className="population-list">
        {population.map(item => {
          return(
            <li className="item-list">
              <h2 className="name">{item.name}</h2>
            </li>
          );
        })}
      </ul>
      </div>
    );

  }
}

export default App;
