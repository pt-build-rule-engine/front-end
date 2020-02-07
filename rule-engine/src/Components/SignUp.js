import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withFormik } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { signup } from '../Actions/SignUp';

const SignUp = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");

        const validateForm = () =>  {
            return email.length > 0 && password.length > 0 && phoneNumber > 0 && name > 0 && companyName > 0;
        }

        const handleSubmit = event =>  {
            event.preventDefault();
            const credentials = {
              email: email,
              password: password,
              phoneNumber: phoneNumber,
              name: name,
              companyName: companyName,
            };
            props.login(credentials)
            props.history.push('/contacts')
          }

    return (
        <div className="Login">
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="name" bsSize="large">
              <FormLabel>Name</FormLabel>
              <FormControl
                value={name}
                onChange={e => setName(e.target.value)}
                type="name"
              />
            </FormGroup>
            <FormGroup controlId="companyName:" bsSize="large">
              <FormLabel>Company Name</FormLabel>
              <FormControl
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                type="companyName"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Phone Number</FormLabel>
              <FormControl
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                type="phoneNumber"
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
              SignUp
            </Button>
          </form>
        </div>
      );
}

const EnhancedForm = withFormik({
    mapPropsToValues: ({ name, password, companyName, email, phoneNumber }) => ({

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

})(SignUp);

export default connect(null, {signup})(EnhancedForm);
