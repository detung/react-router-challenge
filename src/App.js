import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import About from './components/About';
import Resume from './components/Resume';
import ProjectsIndexContainer from './containers/ProjectsIndexContainer';
import ProjectShowContainer from './containers/ProjectShowContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={About} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={ProjectsIndexContainer} />
        <Route path='/projects/:id' component={ProjectShowContainer} />
      </Route>
    </Router>
  )
}

export default App;
