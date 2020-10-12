import React from 'react';
import '../styles/Contact.css';
import PropTypes from 'prop-types'



function Contact({name, avatar, online}) {
    return ( <div className="Contact">
        <img className="avatar" src={avatar} alt='profile'/>
        <div className="status">
            <div className="name">{name}</div>
            <div className="status">
                {online ? <div className="status-online" /> : <div className="status-offline"></div> } 
                <div className="status-text">{online ? 'Online' : 'Offline'} </div>
            </div>
            </div>
        </div>
    );
}
 
Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool,
  };

export default Contact;

