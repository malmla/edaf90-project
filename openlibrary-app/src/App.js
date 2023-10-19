import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from "react-router-dom";

import { useReducer } from 'react';
import listReducer from './listReducer.js';
import { ListContext, ListDispatchContext } from './listContexts';

function App() {

  /*const temp = [
    {"Title":"Dune", "Author": "Frank Herbert", "Year": 1965, "Publisher":"Chilton Books"},
    {"Title":"Metro 2033", "Author": "Dmitry Glukhovsky", "Year": 2002, "Publisher":"Eksmo"},
    {"Title":"The Big Short", "Author": "Michael Lewis", "Year": 2010, "Publisher":"W. W. Norton & Company"}
  ];*/

  const favStore = JSON.parse(window.localStorage.getItem("fav"));
  const todoStore = JSON.parse(window.localStorage.getItem("todo"));
  const finStore = JSON.parse(window.localStorage.getItem("fin"));

  const [fav, favDispatch] = useReducer(listReducer, favStore || []);
  const [todo, todoDispatch] = useReducer(listReducer, todoStore || []);
  const [fin, finDispatch] = useReducer(listReducer, finStore || []);
  return (
    <ListContext.Provider value={{"fav":fav, "todo":todo, "fin":fin}}>
      <ListDispatchContext.Provider value={{"fav":favDispatch, "todo":todoDispatch, "fin":finDispatch}}>
        <div className="App">
          <NavigationBar />
          <Outlet />
        </div>
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  );
}

export default App;
