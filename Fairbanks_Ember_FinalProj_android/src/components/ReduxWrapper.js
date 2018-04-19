import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import infoReducer from '../reducers/infoReducer';
import App  from './App';

const store = createStore(infoReducer);

export default class ReduxWrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}