import './App.css';
import NavigationBar from './components/NavigationBar';
import { Outlet } from "react-router-dom";

function App() {
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
