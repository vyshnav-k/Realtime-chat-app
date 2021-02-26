
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

import chat from './components/chat/chat'
import homeDashboard from './components/home/homeDashboard'

function App() {
  return (
    <Router>
      < Route path="/" exact component={homeDashboard}/>
      < Route path="/chat" exact component={chat}/>

    </Router>
  );
}

export default App;
