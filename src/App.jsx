import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <header className="App-header">
                <Navbar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Work />} path="/work" />
                    <Route element={<AboutMe />} path="/aboutme" />
                </Routes>

                <Contact />
            </header>
        </BrowserRouter>
    </div>
  );
}

export default App;

