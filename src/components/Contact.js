import React from 'react';
import '../styles/Contact.css';
import PropTypes from 'prop-types'



class Contact extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        online: props.online,
    };
    }
    render() {
        return ( <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt='profile'/>
            <div>
                <div className="name">{this.props.name}</div>
                <div className="status" onClick = {event => {const newOnline = !this.state.online;
                this.setState({online : newOnline}); }}>
                    {this.state.online ? <div className="status-online" /> : <div className="status-offline"></div> } 
                    <div className="status-text">{this.state.online ? 'Online' : 'Offline'} </div>
                </div>
                </div>
            </div>
        );
    }
     
}
 
Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool,
  };

export default Contact;

