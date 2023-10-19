import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from "react-router-dom";
import {Book} from "./dataClasses";

function App() {
    /*let temp;
    let b = Book.search("Lord of the rings").then(b => {
        console.log(b);
        b[0].getEditions().then(v => console.log(b[0]));
    });*/
  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
      <footer className='my-5'>
        UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
      </footer>
    </div>
  );
}

export default App;
