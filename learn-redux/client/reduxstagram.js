import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

// import componnets
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import react router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));