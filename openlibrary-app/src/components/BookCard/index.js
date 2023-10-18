import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';


function BookCard(props) {
  const { book } = props;
  const authors = [];
  const navigate = useNavigate();
  for (let index = 0; index < book.authors.length; index++) {
    const author_name = book.authors[index];
    const author_key = book.authors_key[index];
    authors.push({"name": author_name, "key": author_key});
  }

  const onClick = () => {
    navigate("/books/" + book.id);
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
            <Card.Text className="text-left"> {/* gör dynamiskt antal länkar */}
              <b>Authors:</b>
              {
                authors.map(author => {
                  return (<Button href={'/authors/' + author.key} variant='link'>{author.name}</Button>)
                })
                
              } <br/>
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