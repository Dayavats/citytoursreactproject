import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
import Navbar from "./componets/navbar/navbar";
import TourList from "./componets/TourList";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <TourList/>
    </React.Fragment>
  );
}

export default App;
