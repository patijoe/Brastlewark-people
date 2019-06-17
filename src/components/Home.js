import React from 'react';
import Filter from './Filter';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const { population, handleFilterName, filterName } = this.props;

    return (
      <div className="app">
        <Filter 
          filterName={filterName}
          handleFilterName={handleFilterName} />

        <hr className="row" />

        <ul className="population__list">
          {population
          .filter(item => item.name.toUpperCase().includes(filterName.toUpperCase()))
          .map(item => {
            return (
              <li className="person__item" key={item.id}>
                <Link className="home__link" to={`/person/${item.id}`}>
                    <div className="person__img" style={{backgroundImage:`url(${item.thumbnail})`}}></div>
                    <h2 className="person__name">{item.name}</h2>
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