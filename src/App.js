import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductGrid from './components/ProductGrid/index';
import ProductDetailsPage from './components/ProductDetailsPage/index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductGrid} />
          <Route path="/product/:productId" component={ProductDetailsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
