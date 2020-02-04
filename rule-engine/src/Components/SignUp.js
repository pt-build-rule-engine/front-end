import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


const SignUp = (props) => {

    const handleSubmit = event => {

        event.preventDefault();
    };

    return (
        <div>
           <br>
              <h1>Welcome to Logic Tree!</h1>
           </br> 
           <Form onSubmit={handleSubmit}>'
           
            <label>
                Company Name:
                <Field
                    type="text"
                    placeholder="Company Name"
                />
            </label>
            <label>
                Email:
                <Field 
                    type="text"
                    placeholder="Email"
                />
            </label>
            <label>
                Phone Number:
                <Field
                    type="text"
                    placeholder="Phone Number"
                />
            </label>
               
           </Form>     
        </div>
    );
};

export default SignUp;