import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import ContactCard from './ContactCard';
import { getContacts } from '../Actions/getContacts';
import { deleteContact } from '../Actions/deleteContact';


const ContactList = (props) => {
    
    useEffect(()=>{
        props.getContacts()
    },[])


    return (
        <section className="character-list">
            <SearchForm
            contacts={props.contacts}
            />
            {props.contacts.map((item) => {
                
                return (
                    <ContactCard 
                        key={item.id} 
                        item={item}
                        deleteContact={props.deleteContact}
                        getContacts={props.getContacts}
                    />
                );
            })}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts
    }   
};


export default connect(mapStateToProps, { getContacts, deleteContact })(ContactList)

