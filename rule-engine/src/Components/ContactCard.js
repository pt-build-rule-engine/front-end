import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    background-color: lightblue;
    border: 1.2px solid black;
    color:white;
    font-family: 'Bangers', cursive;
    `;

    const deleteHandler = (e) => {
        e.preventDefault()
        if(window.confirm('Are you sure you want to delete this contact?')){
            props.deleteContact()
        }
    }

    return (
        <StyledDiv>
            <p>{props.item.email}</p>
            <p>{props.item.companyName}</p>
            <p>{props.item.name}</p>
            <Link to={`/edit-contact/${props.item.id}`}>Edit</Link>
            <button onClick={props.deleteHandler}>Delete</button>
        </StyledDiv>
    );
}

export default ContactCard;