
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from'./components/Header';
import NotesListPage from'./pages/NotesListPage';
import React,{useState} from 'react';
import NotePage from "./pages/NotePage";
import './App.css'




function App() {

  return (
    <Router>
      <div id="container" className="container dark">
        <div className="app">
        <Header/>
        <Route path='/' exact component={NotesListPage}/>
        <Route path='/note/:id' component={NotePage}/>
      </div>
      
      </div>
    </Router>
  );
}

export default App;
