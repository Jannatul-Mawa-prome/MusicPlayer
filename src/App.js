import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Music from "./Components/Music";

function App() {
  return (
    <div >
       <Router>
      
        <Switch>
            <Route path="/musicPlay/:id">
              <Music />
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
    </Router>
        
    </div>
  );
}

export default App;
