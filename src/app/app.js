import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {render} from 'react-dom';
import People from './components/People';
import Recipe from './components/Recipe';
import RecDetails from './components/RecDetails';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import useBasename from 'history/lib/useBasename'
function withExampleBasename(history, dirname) {
  return useBasename(() => history)({ basename: `/` })
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Routes = ({ history }) =>
  <Router history={withExampleBasename(hashHistory, __dirname)}>
    <Route path="/" component={People} />
    <Route path="/recipe" component={Recipe} />
    <Route path="/recDetails" component={RecDetails} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};


const App = () => (
  <MuiThemeProvider>
    <Routes history={hashHistory} />
  </MuiThemeProvider>
);

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<App />, document.getElementById('app'));
