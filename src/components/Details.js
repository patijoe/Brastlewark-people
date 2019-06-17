import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {

  componentWillUnmount() {
    this.props.handleResetFilter();
  }

  render() {
    const { population } = this.props;
    const id = this.props.match.params.id;

    const newPerson = population.find(item => parseInt(id) === item.id);

    return (
      <div className="details__page">
        {newPerson !== undefined
          ? <div className="detail__container">

            <div className="newPerson__img" style={{ backgroundImage: `url(${newPerson.thumbnail})` }}></div>

            <div className="newPerson__info">
              <h2 className="newPerson__name">{newPerson.name}</h2>

              <div className="newPerson__block1">

                <div className="newPerson__char">
                  <h2 className="newPerson__details">Personal characteristics</h2>
                  <h3 className="newPerson__age char">Age: {newPerson.age}</h3>
                  <h3 className="newPerson__weight char">Weight: {newPerson.weight}</h3>
                  <h3 className="newPerson__height char">Heigth: {newPerson.height}</h3>
                  <h3 className="newPerson__hair char">Color hair: {newPerson.hair_color}</h3>
                </div>

                <div className="newPerson__prof">
                  <h2 className="newPerson__details">Professions</h2>
                  <ul className="prof__list">
                    {newPerson.professions.map(item => {
                      return (<li className="prof__item char">{item}</li>);
                    })}
                  </ul>
                </div>
              </div>

              <h2 className="newPerson__details">Friendships</h2>
              <h3 className="newPerson__friends char">
                {newPerson.friends.join(', ')}
              </h3>
            </div>

          </div>
          : 'no hay info'}

        <Link className="return__link" to="/">RETURN</Link>
      </div>
    );
  }
}

export default Details;