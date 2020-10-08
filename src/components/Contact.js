import React from 'react';
import '../styles/Contact.css';


const name = 'Nora Anderson';
const avatar = 'https://randomuser.me/api/portraits/women/65.jpg';
const online = false;

function Contact() {
    return ( <div className="Contact">
        <img className="avatar" src={avatar} alt='profile'/>
        <div>
            <div className="name">{name}</div>
            <div className="status">
                {online ? <div className="status-online"></div>: <div className="status-offline"></div> } 
                <div className="status-text">{online? 'Online' : 'Offline'} </div>
            </div>
            </div>
        </div>
    );
}
 
export default Contact;
