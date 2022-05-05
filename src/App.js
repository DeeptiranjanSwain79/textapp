// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');    //Whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#021d41';
      showAlert("Dark mode enabled.", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled.", "success");
    }
  }

  return (
    <>
      <Navbar title="TextApp" aboutText="About Us" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container">
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
      </div>
      {/* Wrapping in the router */}
      <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextApp - Word Counter, Character counter, Remove extra spaces" mode={mode} />} />
            {/* 'exact' is for exact matching */}
            <Route path="about" element={<About mode={mode} />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
