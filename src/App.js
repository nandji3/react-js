import './App.css';
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from 'react'

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";;

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (mesage, type) => {
    setAlert({
      msg: mesage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#10164b";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000)
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 7000)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container  my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze " mode={mode} />} /> */}
        <TextFrom showAlert={showAlert} heading="Enter the text to analyze " mode={mode} />
        {/* </Routes> */}
      </div >
      {/* </Router > */}
    </>
  );
}

export default App;













/* 
You have to check npm package version first. To check, run npm info react-router-dom version.

If the package version is >= 6.0.0, you have to change

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
to

import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
And also have to change

<Route path="/home" component={Home} />
to

<Route path="/home" element={<Home/>} />


OR

Change from

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

<Switch>
    <Route path="/home" component={Home} />
</Switch>
to

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

<Routes>
    <Route path="/home" element={ <Home />} />
</Routes>

Eg :

// This is a React Router v6 app
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}
*/