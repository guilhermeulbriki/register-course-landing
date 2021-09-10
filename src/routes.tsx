import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormPage from './pages/form';
import ThanksPage from './pages/thanks';

import ScrollToTop from './utils/ScrollToTop';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Switch>
        <Route path="/" component={FormPage} exact />
        <Route path="/thanks" component={ThanksPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
