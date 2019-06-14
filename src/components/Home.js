import React from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const { population, handleFilterName, filterName } = this.props;
    console.log('**', population);

    return (
      <div className="app">
        <Filter handleFilterName={handleFilterName} />

        <ul className="population_list">
          {population
          .filter(item => item.name.toUpperCase().includes(filterName.toUpperCase()))
          .map(item => {
            return (
              <li className="person_item" key={item.id}>
                <Link className="home__link" to={`/person/${item.id}`}>
                  <div className="person__container">
                    <div className="person__img" style={{backgroundImage:`url(${item.thumbnail})`}}></div>
                    <h2 className="person_name">{item.name}</h2>

                  </div>
                </Link>
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }
}

export default Home;