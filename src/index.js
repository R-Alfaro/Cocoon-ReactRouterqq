import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AppHome from './AppHome';
import AppAbout from './AppAbout';
import AppServices from './AppServices';
import AppPortfolio from './AppPortfolio';
import AppBlog from './AppBlog';
import AppContact from './AppContact';
import AppElement from './AppElement';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppHome />, document.getElementById('root'));
//ReactDOM.render(<AppAbout />, document.getElementById('root'));
//ReactDOM.render(<AppServices />, document.getElementById('root'));
//ReactDOM.render(<AppPortfolio />, document.getElementById('root'));
//ReactDOM.render(<AppBlog />, document.getElementById('root'));
//ReactDOM.render(<AppContact />, document.getElementById('root'));
//ReactDOM.render(<AppElement />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
