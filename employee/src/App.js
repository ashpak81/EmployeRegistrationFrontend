import './App.css';
import React from 'react';
import Header from './Pages/header/header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/dashboard/Dashboard';
import NoMatch from './Pages/noMatch/noMatch';
import PostUser from './Pages/Employee/PostUser';
import UpdateUser from './Pages/Employee/UpdateUser';


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element = {<Dashboard/>} />
        <Route path='/employee' element = {<PostUser/>} />
        <Route path='/employee/:id' element = {<UpdateUser/>} />
        <Route path='*' element = {<NoMatch/>} />
      </Routes>
        
    </>
  );
}

export default App;
