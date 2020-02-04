import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field, yupToFormErrors, ErrorMessage } from "formik";
import * as Yup from "yup";
// the signUp referenced at the bottom of this file depends on an AdvancedReact component that I cannot build yet

const SignUp = (props) => {

    const handleSubmit = event => {

        event.preventDefault();
        let auth={companyName: values.companyName, email: value.email, phoneNumber: value.phoneNumber}

        api()
          .post("https://guidr-project.herokuapp.com/users/login", auth)
          .then(response => {

             console.log(response.data.token);
             console.log(response.data.id);
          })

        .catch(error => {
            console.log(error);
        })
    };

    return (
        <div>
           <br/>
              <h1>Welcome to Logic Tree!</h1>
           <br/> 
           <Form onSubmit={handleSubmit}>'
           
            <label>
                Company Name:
                <Field
                    type="text"
                    placeholder="Company Name"
                    value={value.companyName}
                />
                 {touched.companyName && errors.username && <p color="danger">{errors.companyName}</p>}
            </label>
            <label>
                Email:
                <Field 
                    type="text"
                    placeholder="Email"
                    value={value.email}
                />
                  {touched.email && errors.email && <p color="danger">{errors.email}</p>}
            </label>
            <label>
                Phone Number:
                <Field
                    type="text"
                    placeholder="Phone Number"
                    value={value.phoneNumber}
                />
                {touched.phoneNumber && errors.phoneNumber && <p color="danger">{errors.phoneNumber}</p>}
            </label>
               
           </Form>
           <br/>
           <br/>
           <p> Don't have an account? Click here to create one:</p>
           <Button color="success" tag={Link} to='/signup' component={Signup}>SignUp</Button>{' '}  
           <br/>   
        </div>
    );
}

const enhancedForm = withFormik ({
    mapPropsToValues: ({companyName, email, phoneNumber}) => ({

        companyName: companyName ||" ",
        email: email || " ",
        phoneNumber: phoneNumber || " ",

    }),

    validationSchema: Yup.object().shape({

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

    })
})(MyInnerForm);

export default SignUp;