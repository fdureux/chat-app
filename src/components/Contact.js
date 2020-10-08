import React from 'react';
import '../styles/Contact.css';
import PropTypes from 'prop-types'



function Contact(props) {
    return ( <div className="Contact">
        <img className="avatar" src={props.avatar} alt='profile'/>
        <div>
            <div className="name">{props.name}</div>
            <div className="status">
                {props.online ? <div className="status-online"></div>: <div className="status-offline"></div> } 
                <div className="status-text">{props.online? 'Online' : 'Offline'} </div>
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
