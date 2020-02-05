import React, { useState } from 'react';
import { addContact } from '../Actions/addContact';
import { connect } from 'react-redux';

const AddForm = (props) => {

    const [newContact, setNewContact] = useState({
        company: '',
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
    }

    return (
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='company'
                    type='text'
                    value={newContact.company}
                    placeholder='Company'
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
            </form>
        </div>
    );
};

// const mapStateToProps = (state) =>{

// }

export default connect(null, { addContact })(AddForm);