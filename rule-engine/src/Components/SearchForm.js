import React, { useState } from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from "formik";


const SearchForm = (props) => {

    const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    `;

    const [searchTerm, setSearchTerm] = useState(props.contacts);

    // useEffect(() => {
    //     setSearchTerm(props.contacts);
    // }, [props.contacts]);

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
        </div>
    );
}

 /*const results = setSearchTerm.filter(datum=>datum.name.tolowerCase().includes(values.lowerCase()));
 /*setSearchTerm(results);*/

const FormikSearchForm = withFormik({
    mapPropsToValues({ search }) {
        return {
            search: search || "",
        };
    },

    handleSubmit(values, { contacts }) {
        contacts(values);
    }

})(SearchForm);


export default FormikSearchForm;