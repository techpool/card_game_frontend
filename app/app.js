import React from 'react';
import { render } from 'react-dom';
import MainComponent from './containers/Main';
import CardDeck from './containers/CardDeck';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { Provider } from 'react-redux';
import store from './redux-stuff/store';
import { Router, Route, Link, browserHistory } from 'react-router';




render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route  component={MainComponent}>
                <Route  path="/play" component={CardDeck} />
                <Route  path="/login" component={Login} />
                <Route  path="/register" component={Register} />
            </Route>
        </Router>
    </Provider>
), document.querySelector('.root'))
