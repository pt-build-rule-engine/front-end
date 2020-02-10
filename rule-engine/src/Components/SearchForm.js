import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import styled from 'styled-components';

const SearchForm = (props) => {

    const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    `;

    const [query, setQuery] = useState("");

    const changeHandler = (event) => {

        let newState = props.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(event.target.value.toLowerCase());
        })

        console.log(newState);
        setQuery(newState);

    }

    const handleSubmission = event => {
        event.preventDefault();
    }

    let errorStyle = {
        color: "red"
    };

    return (
        <div>
            <StyledDiv>
                <form onSubmit={handleSubmission}>
                    <input type="text" name="search" onChange={event => changeHandler(event)} placeholder="Search..." />
                </form>
            </StyledDiv>
        </div>
    );
}

export default SearchForm;