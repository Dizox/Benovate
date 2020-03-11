import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from './Store';
import Greeting from "./components/Greeting/Greeting";
import UsersList from "./components/UsersList/UsersList";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Greeting />
            </Route>
            <Route exact path='/UsersList'>
              <UsersList />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
