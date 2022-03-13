import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.css'
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Login from './components/User/login';
import Register from './components/User/register';
import Profile from './components/User/profile';
import Companies from './components/Companies';
import CompanyNew from './views/CompanyNew';
import Dashboard from './views/Dashboard';
import NoMatch from './components/nomatch';

import Api from './components/Api/index.json';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
           <AppRoute exact path="/" component={Home} layout={LayoutDefault} /> 
           <AppRoute exact path="/login" component={Login} layout={LayoutDefault} /> 
           <AppRoute exact path="/dashboard" component={Dashboard} layout={LayoutDefault} /> 
           <AppRoute exact path="/register" component={Register} layout={LayoutDefault} /> 
           <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault} /> 
           <AppRoute exact path="/companies" component={Companies} layout={LayoutDefault} /> 
           <AppRoute exact path="/companies/new" component={CompanyNew} layout={LayoutDefault} /> 
           <AppRoute exact path="/api" component={Api} /> 
          
            <Route path="/taxes">
              <Companies />
            </Route>
            <Route>
              <NoMatch />
            </Route>       
        </Switch>
      )} />
  );
}

export default App;