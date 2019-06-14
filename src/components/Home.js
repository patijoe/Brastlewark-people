import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const { population } = this.props;
    console.log('**', population);

    return (
      <div className="app">
        <ul className="population_list">
          {population.map(item => {
            return (
              <li className="person_item" key={item.id}>
                <Link className="home__link" to={`/person/${item.id}`}>
                  <div className="person__container">
                    <h2 className="person_name">{item.name}</h2>

                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;