import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {

  // const {handleResetFilter} =this.props;

  componentWillUnmount(){
    this.props.handleResetFilter();
  }
  
  render() {
    const {population} = this.props;
    const id = this.props.match.params.id;

    const newPerson = population.find(item => parseInt(id)===item.id);
    console.log('^*^', newPerson);
    
    return(
      <div>
        {newPerson !== undefined 
        ? <div className="detail__container">
            <div className="newPerson__img" style={{backgroundImage: `url(${newPerson.thumbnail})`}}></div>
            <div className="newPerson__info">
              <h2 className="newPerson__name">{newPerson.name}</h2>
              <div className="newPerson__char">
                <h3 className="newPerson__age">{newPerson.age}</h3>
                <h3 className="newPerson__weight">{newPerson.weight}</h3>
                <h3 className="newPerson__height">{newPerson.height}</h3>
                <h3 className="newPerson__hair">{newPerson.hair_color}</h3>
              </div>
              <div className="newPerson__prof">
                <ul className="prof__list">
                  {newPerson.professions.map(item => {
                    return(<li className="prof__item">{item}</li>);   
                  })}
                </ul>
              </div>
              {newPerson.friends.map (item => 
                item
              )}
            </div>
            
        </div>
        : 'no hay info'}

        <Link className="return__link" to="/">RETURN</Link>
      </div>
    );
  }
}

export default Details;