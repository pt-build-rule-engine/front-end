import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

    useEffect(()=>{
        if (props.doneLoading){
            props.getContacts()
        }
        console.log('useEffect is firing')
    }, [props.doneLoading])

    const deleteHandler = (e) => {
        if(window.confirm('Are you sure you want to delete this contact?')){
            console.log('from card: ', props.item.id)
            props.deleteContact(props.item.id)
        }
    }

    return (
        <StyledDiv>
            <p>{props.item.email}</p>
            <p>{props.item.companyName}</p>
            <p>{props.item.name}</p>
            <Link to={`/edit-contact/${props.item.id}`}>Edit</Link>
            <button onClick={deleteHandler}>Delete</button>
        </StyledDiv>
    );
}

const mapStateToProps = state =>{
    return {
        doneLoading: state.deletedItem.doneLoading
    }
};

export default connect (mapStateToProps, {}) (ContactCard);