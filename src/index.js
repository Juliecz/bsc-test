import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import Notes from './components/Notes';
import Detail from './components/Detail';
import store from './model/store';

import './styles.less';

// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Router>
        <Route exact path="/" component={Notes} />
        <Route path={'/new'} component={Detail} />
        <Route path={'/detail/:id'} component={Detail} />
        {/*<Route path={'/*'} component={() => (<h2>Not found</h2>)}/>*/}
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
