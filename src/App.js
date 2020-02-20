import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
