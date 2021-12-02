import React from 'react';
import Navbar from './Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' exact component={Home}/>
            </Routes>
        </div>
    );
}

export default App;
