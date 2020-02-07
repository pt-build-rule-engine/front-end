import React, { useState, useEffect } from 'react';
import { editContact } from '../Actions/editContact';
import { getIndContact } from '../Actions/getIndContact';
import { connect } from 'react-redux';
import ContactList from './ContactList';

const EditForm = (props) => {

    const [editedContact, setEditedContact] = useState({
        company: '',
        name: '',
        email: ''
    })

    const [id, setID ] = useState(props.match.params.id)

    console.log('id: ', id)

    useEffect(()=>{
        const card = props.contacts.filter(contact=>{
            return contact.id === id ? contact: null
        })
        console.log('from edit: ', card)
        setEditedContact(card)
    },[])


    const handleChange = e => {
        setEditedContact({
            ...editedContact, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.editContact(id, editedContact)
        props.history.push('/directory')
    }

    return (
        <div>
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='company'
                    type='text'
                    value={editedContact.company}
                    placeholder='Company'
                    onChange={handleChange}
                />
                <input
                    name='email'
                    type='text'
                    value={editedContact.email}
                    placeholder='Email'
                    onChange={handleChange}
                />
                <input
                    name='name'
                    type='text'
                    value={editedContact.name}
                    placeholder='Name'
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {contacts: state.contacts.contacts}
};

export default connect(mapStateToProps, { editContact, getIndContact })(EditForm);