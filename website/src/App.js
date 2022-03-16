// Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS
import './App.css';

// Components
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";


class App extends Component {
  render() {
    return (
      <>
      < HomePage />
      <div>
                < SecondPage />
      </div>
    </>
    );
  }
}
export default App;
