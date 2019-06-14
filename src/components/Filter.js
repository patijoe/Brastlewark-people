import React from 'react';

class Filter extends React.Component{
  render() {
    const {handleFilterName} = this.props;

    return(
      <div className="filterName">
        <label htmlFor="filterName" className="filter__label"> Who are you lookin for?</label>
        <input type="text" id="filterName" onChange={handleFilterName} />
      </div>

    );
  }
}

export default Filter;