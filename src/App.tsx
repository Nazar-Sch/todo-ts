import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { InfoPage } from './pages/InfoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' exact>
            <TodosPage />
          </Route>
          <Route path='/info'>
            <InfoPage />
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
