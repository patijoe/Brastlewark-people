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
          {newPerson.name}
        </div>
        : 'no hay info'}
      </div>
    );
  }
}

export default Details;