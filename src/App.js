import React from 'react';
import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./About";
import Artists from "./Artists";
import Exhibitions from "./Exhibitions";
import Store from "./Store";
import NotFound from "./NotFound";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/artists' element={<Artists/>} />
            <Route path='/exhibitions' element={<Exhibitions/>} />
            <Route path='/store' element={<Store/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
