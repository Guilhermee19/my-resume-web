import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='screen'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={'/'}> <Home /> </Route>
          {/* <Route> <Page404 /> </Route> */}
        </Switch>
      </ BrowserRouter>
    </div>
  );
}

export default App;
