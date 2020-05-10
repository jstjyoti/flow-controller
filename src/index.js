import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from '../src/store/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
