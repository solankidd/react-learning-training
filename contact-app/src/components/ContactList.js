import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <ContactCard 
                key={contact.id} 
                contact={contact}
                deleteHandler={props.deleteHandler}
                >
            </ContactCard> 
        )
    })
    return <div className='ui celled list'>
        {renderContactList}
    </div>
};

export default ContactList;
