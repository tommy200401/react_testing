import MultiCounter from './components/MultiCounter';
import counterReducer from './reducers/counterReducer';
import './App.css';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function App() {
  const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())     //define reducer to manage data
  return (
    <div className="App">
      <Provider store={store}>
        <MultiCounter></MultiCounter>
      </Provider>
    </div>
  );
}

export default App;