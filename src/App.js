
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
const [{user},dispatch]= useStateValue();

useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    dispatch({
      type:"SET_USER",
      user:user
    })
  })
},[])

  return (
    <Router>
     {!user ? (<Login/>):(
    <div className="App">
      <div className="app__body">
      <Sidebar/>
      <Routes>
      <Route path='/room/:roomId'  element={<Chat/>}/>
      <Route exact path='/'element={<Chat/>}/>
      </Routes>
    </div>
    </div>
  )}
    </Router>
  );
}

export default App;
