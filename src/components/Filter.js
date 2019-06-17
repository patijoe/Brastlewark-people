import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component{
  render() {
    const {handleFilterName} = this.props;

    return(
      <div className="filterName">
        <label htmlFor="filterName" className="filter__label"> Who are you looking for?</label>
        <input type="text" id="filterName" onChange={handleFilterName} />
      </div>

    );
  }
}

Filter.propTypes = {
  handleFilterName: PropTypes.func
};

export default Filter;