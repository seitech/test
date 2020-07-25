import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './pages/Home';
import Category from "./pages/Category";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories/:slug" component={Category} />

      </Switch>
    </Router>
      
    
  );
}

export default App;
