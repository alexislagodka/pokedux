import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import initialState from './initialState'

const store = createStore(reducer, initialState, applyMiddleware(thunk))
// eslint-disable-next-line react/display-name
export default props => <Provider store={store} {...props} />
