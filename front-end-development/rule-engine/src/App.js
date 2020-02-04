import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Addform from "./Components/AddForm.js";
import ContactList from "./Components/ContactList.js";
import LogIn from "./Components/LogIn.js";
import LogOut from "./Components/LogOut.js";
import NavBar from "./Components/NavBar.js";
import SignUp from "./Components/SignUp.js";
import './App.css';

/*-pizzassss----*/
function App() {
  return (
    <main>
      <Route exact path="/login"  component={LogIn} />
    </main>
  );
}

export default withRouter(App);
