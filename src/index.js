import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {updateUser} from "./redux/actions";
import {store} from "./redux/store";

/*
const reducer = (state, action) => {
  console.log('state : ' , state);
  console.log('action : ' , action);
  if(action.type === 'changeState'){
    return action.payload.newState
  }
  // state 리턴
  return 'state';
};
*/

/*
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
};
*/

store.subscribe(() => console.log('subscribe : ' , store.getState()));

store.dispatch(updateUser);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
