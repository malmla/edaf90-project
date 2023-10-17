import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../icons/SearchIcon';



function SearchBar() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(text)}`);
  }
  return (
    <Form onSubmit={onSearch} className="d-flex">
      <Form.Control
        htmlSize={50}
        type="text"
        placeholder="Search"
        onChange={e => setText(e.target.value)}
        className="me-2 border border-secondary"
      />
      <SearchIcon onClick={onSearch} className="cursor-pointer"/>
    </Form>
  );
}

export default SearchBar;