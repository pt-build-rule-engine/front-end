import React, { useState } from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from "formik";
import styled from 'styled-components';


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

// const results = searchTerm.filter(datum=>datum.name.tolowerCase().includes(values.lowerCase()));
// setSearchTerm(results);

const FormikSearchForm = withFormik({
    mapPropsToValues({ search }) {
        return {
            search: search || "",
        };
    },

    handleSubmit(values, { dispatch }) {
        dispatch(values);
    }

})(SearchForm);


export default FormikSearchForm;