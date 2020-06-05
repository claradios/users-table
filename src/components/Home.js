import React, {Fragment} from 'react';
import Filters from './Filters';
import UsersTable from './UsersTable';
import PropTypes from 'prop-types';

const Home = props => {
  const {search, api, handleChange} = props;

  return (
    <Fragment>
      <Filters 
        search={search} 
        handleChange={handleChange}
        ></Filters> 
        <UsersTable 
        api = {api} 
        search={search}
        ></UsersTable>
    </Fragment>
  );
};

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  api: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;