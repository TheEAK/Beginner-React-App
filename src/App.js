import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
