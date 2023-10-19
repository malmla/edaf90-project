import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SearchBar from './SearchBar';
import HomeIcon from '../icons/HomeIcon';


function NavigationBar() {
  return (
    <Navbar fixed="sticky" className="d-flex justify-content-between" bg="dark" data-bs-theme="dark">
      <div className="d-flex align-items-center">
        <Nav.Link href="/" className="ps-4 pe-4 text-light ">
          <HomeIcon />
        </Nav.Link>
        <SearchBar />
      </div>
    </Navbar>
  );
}

export default NavigationBar;