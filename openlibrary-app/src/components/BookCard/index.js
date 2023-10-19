import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ListContext, ListDispatchContext } from '../../listContexts.js';
import { handleAdd } from '../../listFunctions';


function BookCard(props) {
  const { book } = props;
  const url = 'https://example.com';

  const lists = useContext(ListContext);
  const dispatches = useContext(ListDispatchContext);

  const onClick = () => {
    console.log("Clicked book: ", book.title);
  }

  return (
    <Card className="book-card">
      <div className="d-flex">

        <Card.Img onClick={onClick} variant="top" src={book?.coverLink} className='book-cover cursor-pointer' />

        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>
              <a href={url}>{book.title}</a>
            </Card.Title>
            <Card.Text className="text-left">
              <b>Author:</b> {book.authors}<br />
              <b>Published:</b> {book.publish_year}<br />
              <br />
            </Card.Text>
          </div>
          <Button variant="primary" onClick={() => handleAdd(book, "fav", lists["fav"], dispatches["fav"])}>Add to favorites</Button>
          <Button variant="primary" onClick={() => handleAdd(book, "todo", lists["todo"], dispatches["todo"])}>Add to planned reading</Button>
          <Button variant="primary" onClick={() => handleAdd(book, "fin", lists["fin"], dispatches["fin"])}>Add to finished books</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default BookCard;