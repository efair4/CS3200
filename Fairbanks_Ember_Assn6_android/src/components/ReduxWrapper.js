import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import listReducer from '../reducers/listReducer';
import App  from './App';

const store = createStore(listReducer);

export default class ReduxWrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}