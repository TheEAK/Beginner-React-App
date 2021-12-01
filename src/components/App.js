import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar>
                <Route path='/' exact component={Home}/>
            </Navbar>
        </Router>
    );
}
export default App;
