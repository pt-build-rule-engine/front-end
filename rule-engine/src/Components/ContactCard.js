import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import deleteContact from '../Actions/deleteContact';

const ContactCard = (props) => {

    const deleteHandler = (e) => {
        e.preventDefault()
        if(window.confirm('Are you sure you want to delete this contact?')){
            props.deleteContact
        }
    }
    return (
        <div>

            <button onClick={props.deleteHandler}>Delete</button>
            <Link to={'/edit-contact/${props.contact.id}'}>Edit</Link>
        </div>
    );
};


export default connect(null, { deleteContact })(mContactCard);