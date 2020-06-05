import React from 'react';
import PropTypes from 'prop-types';
import './MessageInfo.scss'

const MessageInfo= (props)=> {
    const { message} = props;
    
        return (
            <p className= "message__info">{message}</p>
        );
    
}

MessageInfo.propTypes = {
    message: PropTypes.string.isRequired
}

export default MessageInfo;