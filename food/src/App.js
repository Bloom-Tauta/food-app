import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Landing from './components/Landing';
import Navbar from './components/Navbar';
// import About from './components/About';
import Footer from './components/Footer';
// import Search from './components/Search';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/about" to element={<About/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
