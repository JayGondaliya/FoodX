/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import BASE_STACK_NAVIGATOR from './src/Components/RootNavigator';
import { userLoginStatusOperations } from './src/redux/reducer/UserReducer';

const rootReducer = combineReducers({
  userLoginStatus: userLoginStatusOperations
});

const globalStore = createStore(rootReducer);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={globalStore}>
        <BASE_STACK_NAVIGATOR />
      </Provider>
    </>
  );
};



export default App;
