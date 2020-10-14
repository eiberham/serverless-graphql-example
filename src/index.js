import React from 'react';
import ReactDOM from 'react-dom';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));