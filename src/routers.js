import React from 'react';
import {Router,Route,browserHistory,IndexRoute }from 'react-router';

import App from './App';
import Layout from './Layout';
import Blog from './Blog';

export default function(){
  return(
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={App} />
        <Route path='blog/:id' component={Blog} />
      </Route>
    </Router>
  )
}
