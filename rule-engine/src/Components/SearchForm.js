import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import styled from 'styled-components';


const SearchForm = (props) => {

    const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    `;

    const [searchTerm, setSearchTerm] = useState(props.contacts);

    useEffect(() => {
        setSearchTerm(contacts);
    }, [contacts]);

    let errorStyle = {
        color: "red"
    };

    return (
        <div>
        <StyledDiv>
            <Form>
                <Field type="text" name="search" placeholder="Search..." />
            </Form>
        </StyledDiv>
        <StyledDiv>
            <CharacterList searchArg={searchTerm} />
        </StyledDiv>
        </div>
    );
}

const searchResultDisplay = search =>{
    const results = searchTerm.filter(datum=>datum.name.tolowercase().includes(search.lowerCase()));
    setSearchTerm(results);
};

const FormikSearchForm = withFormik({
    mapPropsToValues({ search }) {
        return {
            search: search || "",
        };
    },

    handleSubmit(values, {dispatch }) {
        dispatch(values);
    }
 
})(SearchForm);


export default SearchForm;