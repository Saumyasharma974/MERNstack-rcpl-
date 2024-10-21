// src/index.js or src/App.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App'; // Your main app component
import { blogReducer } from './redux/reducers';

// Create the Redux store
const store = createStore(blogReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}> {/* Wrap your App with Provider */}
        <App />
    </Provider>
);
