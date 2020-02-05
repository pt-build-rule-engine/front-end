import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Addform from "./Components/AddForm.js";
import ContactList from "./Components/ContactList.js";
import LogIn from "./Components/LogIn.js";
import LogOut from "./Components/LogOut.js";
import NavBar from "./Components/NavBar.js";
import SignUp from "./Components/SignUp.js";
import PrivateRoute from './Components/PrivateRoute';
import EditForm from './Components/EditForm';
import './App.css';

/*-*/
function App() {
  return (
    <main>
      <Route path='/' component={NavBar}/>
      <Route path="/signup"  component={SignUp} />
      <PrivateRoute path="/login"  component={LogIn} />
      <PrivateRoute path="/logout"  component={LogOut} />
      <PrivateRoute path="/addform"  component={Addform} />
      <PrivateRoute path="/contacts"  component={ContactList} />
      <PrivateRoute path="/edit-contact/:id"  component={EditForm} />
    </main>
  );
}

export default withRouter(App);
