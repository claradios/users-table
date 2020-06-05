import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = props => {
   const {search, handleChange} = props;
        return (
            <div className="app__search_containter">
                <label className="app__search-label" htmlFor="inputSearch"></label>
                <input className="app__search" type="text" value={search} onChange={handleChange} placeholder="Buscar por nombre, email o website"></input>
            </div>
        );    
}

Filters.propTypes = {
    search: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}


export default Filters;