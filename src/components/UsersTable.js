import React from 'react';
import PropTypes from 'prop-types';
import UserRow from './UserRow';
import MessageInfo from './MessageInfo';
import './UsersTable.scss';

const UsersTable = props => {
    const { api, search } = props;
    const results = api.filter(item => 
        item.name.toUpperCase().includes(search.toUpperCase()) ||
        item.email.toUpperCase().includes(search.toUpperCase()) ||
        item.website.toUpperCase().includes(search.toUpperCase())
    )
    return (
        <div>
        <table className="employees">
            <thead>
            <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Dirección</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>{ results.length >0 && results.map((item , key)=> {
                        return <UserRow
                            key = {key}
                            id={item.id}
                            name={item.name}
                            email={item.email}
                            address={item.address}
                            website={item.website}
                        ></UserRow> 
                })
            }</tbody>
        </table>
        {!results.length && <MessageInfo message= "Su búsqueda no tiene resultados."></MessageInfo>}
        </div>)
}

UsersTable.propTypes = {
    api: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string.isRequired
}


export default UsersTable;