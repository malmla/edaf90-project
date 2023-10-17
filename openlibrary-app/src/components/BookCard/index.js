import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';


function BookCard(props) {
  const { book } = props;

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
              <Link to={"/books/" + book.id}>{book.title}</Link>
            </Card.Title>
            <Card.Text className="text-left">
              <b>Author:</b><Button href={'../authors/' + book.authors_key} variant='link'>{book.authors}</Button><br />
              <b>Published:</b> {book.publish_year}<br />
              <br />
            </Card.Text>
          </div>
          <Button variant="primary">Add somewhere</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default BookCard;