import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import './flexboxgrid.css';
import {Provider} from 'react-redux';
import allReducers from './Redux/Reducers';
import {legacy_createStore as createStore} from 'redux';

const store = createStore(allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <Router>
       <App />
    </Router>
  </Provider>
  ,document.getElementById("root")
);


