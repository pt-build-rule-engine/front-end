import React, { useState, useEffect } from 'react';
import { editContact } from '../Actions/editContact';
import { getIndContact } from '../Actions/getIndContact';
import { connect } from 'react-redux';

const EditForm = (props) => {

    const [editedContact, setEditedContact] = useState({
        company: '',
        name: '',
        email: ''
    })

    useEffect(()=>{
        setEditedContact(props.getIndContact(props.match.params.id))
    },[])

    const handleChange = e => {
        setEditedContact({
            ...editedContact, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.editContact(editedContact)
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
            </form>
        </div>
    );
};

// const mapStateToProps = (state) =>{

// }

export default connect(null, { editContact, getIndContact })(EditForm);