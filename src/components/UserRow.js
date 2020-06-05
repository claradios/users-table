import React from 'react';
import PropTypes from 'prop-types';
import './UserRow.scss'

const UserRow = (props , key)=> {
    const { id,name, email, address, website} = props;
    
        return (
        <tr key={key}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td> 
                <td>{address.street} {address.suite} {address.city} {address.zipcode}</td>
                <td>{website}</td>
            </tr>
        );
    
}

UserRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    website: PropTypes.string.isRequired
}


export default UserRow;