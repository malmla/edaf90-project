import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from "react-router-dom";
import { createContext, useReducer } from 'react';
import listReducer from './listReducer';

export const ListContext = createContext(null);
export const ListDispatchContext = createContext(null);

function App() {

  const listsStore = JSON.parse(window.localStorage.getItem("lists"));
  const testInit = [{
    "name": "Redwall", "description": "Redwall böckerna", "list_items":
      [{ "key": "/works/OL465952W", "title": "Redwall (Redwall #1)" },
      { "key": "/works/OL25141865W", "title": "Mariel of Redwall (Redwall #4)" },
      { "key": "/works/OL465980W", "title": "Taggerung (Redwall #14)" },
      { "key": "/works/OL465915W", "title": "Marlfox (Redwall #11)" },
      { "key": "/authors/OL27229A", "title": "Brian Jacques" }]
  },
  {
    "name": "Lord of the rings", "description": "Lord of the rings list", "list_items":
      [{ "key": "/works/OL27448W", "title": "The Lord of the Rings" },
      { "key": "/works/OL27479W", "title": "The Two Towers" },
      { "key": "/works/OL27516W", "title": "The Return of the King" },
      { "key": "/authors/OL26320A", "title": "J.R.R. Tolkien" }]
  }];

  const [lists, dispatch] = useReducer(listReducer, listsStore || testInit);

  return (
    <div className="App">
      <ListContext.Provider value={lists}>
        <ListDispatchContext.Provider value={dispatch}>
          <NavigationBar />
          <Outlet />
        </ListDispatchContext.Provider>
      </ListContext.Provider>
      <footer className='my-5'>
        UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
      </footer>
    </div>
  );
}

export default App;