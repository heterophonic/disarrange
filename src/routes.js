import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainPage } from './main';

const Routes = () => (
    <Router>
      <Route exact path="/" component={MainPage}/>
    </Router>
);
export default Routes;