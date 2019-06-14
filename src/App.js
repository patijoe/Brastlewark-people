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
      console.log('*', data.Brastlewark[0].name);
      this.setState({
        population: data.Brastlewark
      })
    })

  }

  render() {
    const {population} = this.state;
    console.log('**', population);

    return (
      <div className="app">
      <ul className="population-list">
        {population.map(item => {
          return(
            <li className="item-list" key={item.id}>
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
