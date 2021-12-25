import React from 'react';
import User from '../images/user.png';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className='item'>
            <div className="right floated content">
                <i 
                    onClick={ () => props.deleteHandler(id) } 
                    style={{color:'red', marginTop:'7px'}} 
                    className='trash alternate outline icon'>
                </i>
            </div>
            <img className="ui avatar image" src={User}></img>
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
        </div>
    )
}

export default ContactCard;