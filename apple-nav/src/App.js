import React, { useState } from 'react';
import './App.css';

import { NavWrapper, Nav } from './components'

import { Route } from 'react-router-dom'

import data from './data'

const App = props => {
  const [items] = useState(data)

  return (
    <div className="App">

      <Route path='/' render={props => <NavWrapper items={items} {...props} />} />

      <Route path='/:navItemName' render={props => <Nav items={items} {...props} />} />

    </div>
  );
}

export default App;
