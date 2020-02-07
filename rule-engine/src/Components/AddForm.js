import React, { useState } from 'react';
import { addContact } from '../Actions/addContact';
import { connect } from 'react-redux';

const AddForm = (props) => {

    const [newContact, setNewContact] = useState({
        companyName: '',
        name: '',
        email: ''
    })

    const handleChange = e => {
        setNewContact({
            ...newContact, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addContact(newContact)
        props.history.push('/directory')
    }

    return (
        <div>
            <br/>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='companyName'
                    type='text'
                    value={newContact.companyName}
                    placeholder='Company name'
                    onChange={handleChange}
                />
                <input
                    name='email'
                    type='text'
                    value={newContact.email}
                    placeholder='Email'
                    onChange={handleChange}
                />
                <input
                    name='name'
                    type='text'
                    value={newContact.name}
                    placeholder='Name'
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <br/>
        </div>
    );
};

export default connect(null, { addContact })(AddForm);