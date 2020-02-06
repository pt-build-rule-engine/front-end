import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field, yupToFormErrors, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const SignUp = (props) => {

    const { values, touched, errors } = props;

    return (
        <div>
              <h1>Welcome to Logic Tree!</h1>
           <Form>'
           
           <label>
               Name:
               <Field 
               type='text'
               name='name'
               placeholder="Name"

               />
           </label>
           <label>
               Password:
               <Field 
               type='password'
               name='password'
               placeholder="Password"
               />
           </label>
            <label>
                Company:
                <Field
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                />
                 {touched.companyName && errors.username && <p color="danger">{errors.companyName}</p>}
            </label>
            <label>
                Email:
                <Field 
                    type="text"
                    name="email"
                    placeholder="Email"
                />
                  {touched.email && errors.email && <p color="danger">{errors.email}</p>}
            </label>
            <label>
                Phone Number:
                <Field
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                />
                {touched.phoneNumber && errors.phoneNumber && <p color="danger">{errors.phoneNumber}</p>}
            </label>
               
           </Form>
        </div>
    );
}

const enhancedForm = withFormik({
    mapPropsToValues: ({name, password, companyName, email, phoneNumber}) => ({

        name: name || "",
        password: password || "",
        companyName: companyName || "",
        email: email || "",
        phoneNumber: phoneNumber || "",

    }),

    validationSchema: Yup.object().shape({

        name: Yup.string()
        .min(2, 'Invalid name')
        .required('Name is required'),

        password: Yup.string()
        .min(2, 'Invalid Password')
        .required('Password is required'),

        companyName: Yup.string()
        .max(20, 'CompanyName must be shorter than 20 characters')
        .required('Username is required!'),

        email: Yup.string()
        .min(5, 'Invalid email')
        .max(30, 'Email must be shorter than 30 characters')
        .required('Email is required'),

        phoneNumber: Yup.string()
        .min(10, 'Phone number needs to at least be 10 characters')
        .required('Phone Number is required'),

    }),

    handleSubmit(values, { setStatus }) {

        axios
         .post("", values)
         .then(response => {
            console.log(response);
            setStatus(response);
        })
         .catch(error => {
            console.log(error);
        
        })

    }

})(SignUp);

export default SignUp;