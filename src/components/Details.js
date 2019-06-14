import React from 'react';

class Details extends React.Component {
  
  render() {
    const {population} = this.props;
    const id = this.props.match.params.id;

    const newPerson = population.find(item => parseInt(id)===item.id);
    console.log('^*^', newPerson);
    
    return(
      <div>
        {newPerson !== undefined 
        ? <div className="detail__container">
          <h2 className="newPerson__name">{newPerson.name}</h2>
          <div className="newPerson__img" style={{backgroundImage: `url(${newPerson.thumbnail})`}}></div>
        </div>
        : 'no hay info'}
      </div>
    );
  }
}

export default Details;