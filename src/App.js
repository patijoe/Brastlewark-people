import React from 'react';
import { petition } from './services/petition';
import Home from './components/Home';
import Details from './components/Details';
import { Switch, Route } from 'react-router-dom';
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
    
    return(
      <Switch>

        <Route 
          exact path = "/"
          render={() => (
            <Home 
              population = {population}
            />
          )}
        />

        <Route 
          path = "/person/:id"
          render = {(routerProps) => (
            <Details 
              match = {routerProps.match}
              population = {population}
              handleResetFilter = {this.handleResetFilter}
            />
          )}
        />

    </Switch>
    );




  }
}

export default App;
