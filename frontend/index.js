import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import './assets/scss/index.scss';
import App from './App';

render(<App />, document.querySelector("#root"));

if (module.hot) {
    module.hot.accept()
}