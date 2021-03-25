import React, {useState, useEffect} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <section className="projectLinks">
      <Route>
        <NavLink title="Navigate to buttons" id="project1" className="projectLink" to="/buttons">
          Button World
        </NavLink>
      </Route>
      <Route>
        <NavLink title="Navigate to project 2" id="project2" className="projectLink" to="/project2">
          Project Two
        </NavLink>
      </Route>
      <Route>
        <NavLink title="Navigate to project 3" id="project3" className="projectLink" to="/project3">
          Project Three
        </NavLink>
      </Route>
    </section>
  )
}

export default Menu;
