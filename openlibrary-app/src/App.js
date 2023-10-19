import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from "react-router-dom";
import { createContext, useReducer } from 'react';
import listReducer from './listReducer';

export const ListContext = createContext(null);
export const ListDispatchContext = createContext(null);

function App() {

  const listsStore = JSON.parse(window.localStorage.getItem("lists"));
/*   const initialLists = [{"name": "favoriter1", "list_items":["abc", "dfe", "blabla", "herkules"], "description": "några favorittermer för temporära listor"},
  {"name": "pingviiner", "list_items":["poirot", "köttbulle", "falukorv"], "description": "några saker som definitivt inte är pingiviner"}, 
  {"name": "lunch", "list_items": ["fiskpinne", "potatis"], "description": "vad jag åt till lunch idag"}]; */
  const [lists, dispatch] = useReducer(listReducer, listsStore || []);
  
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