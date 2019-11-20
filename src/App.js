import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store as appStore} from "./redux/store"

function App() {
  return (
    <Provider store={appStore}>
    <div>
      <h1> redux</h1>
      <p> combine reducers</p>
    </div>
    </Provider>
  );
}

export default App;
