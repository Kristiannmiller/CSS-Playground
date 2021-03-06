import React, {useState, useEffect} from 'react';
import {withRouter, BrowserRouter, Route, Switch, NavLink, useHistory} from 'react-router-dom';
import Buttons from './Buttons/Buttons.js'
import Menu from './Menu/Menu.js'
import './App.css';

function App() {

  let history = useHistory()
  console.log(history)

  return (
    <div className="App">
      <header className="headerWrap">
        <Route>
          <NavLink title="Navigate to main menu" className="homeLink" to="/">
            CSS Playground
          </NavLink>
        </Route>
      </header>
      <Switch>
        <Route path='/buttons'>
          <Buttons />
        </Route>
        <Route exact path='/'>
          <Menu />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
