import React from 'react';
import { petition } from './services/petition';
import Home from './components/Home';
import Details from './components/Details';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      population: [],
      filterName:''
    }

    this.handleFilterName=this.handleFilterName.bind(this);
    this.handleResetFilter=this.handleResetFilter.bind(this);
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

  handleFilterName(event) {
    const nameValue = event.currentTarget.value;
    this.setState({
      filterName: nameValue
    })
  }

  handleResetFilter(){
    this.setState({
      filterName:''
    })
  }

  render() {
    const {population, filterName} = this.state;
    
    return(
      <Switch>

        <Route 
          exact path = "/"
          render={() => (
            <Home 
              population={population}
              filterName={filterName}
              handleFilterName={this.handleFilterName}
            />
          )}
        />

        <Route 
          path = "/person/:id"
          render = {(routerProps) => (
            <Details 
              match={routerProps.match}
              population={population}
              handleResetFilter={this.handleResetFilter}
            />
          )}
        />

    </Switch>
    );




  }
}

export default App;
