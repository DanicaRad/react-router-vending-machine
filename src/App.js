import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Cheetos from './Cheetos';
import LaCroix from './LaCroix';
import GummyBears from './GummyBears';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route path='/gummy-bears'>
          <GummyBears />
        </Route>
          <Route path='/la-croix'>
            <LaCroix />
          </Route>
          <Route path='/cheetos'>
            <Cheetos />
          </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
