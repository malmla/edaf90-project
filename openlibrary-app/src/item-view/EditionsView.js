import {Link, useLoaderData, useParams} from "react-router-dom";
import BookCard from "../components/BookCard";
import {Table} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";



function EditionsView(){
    const editions = useLoaderData();
    const url = useParams();
    return (
        <Table striped bordered hover>
            <tbody>
            <tr>
                <th>Title</th>
                <th>Publisher(s)</th>
                <th>Year</th>
            </tr>
                {editions.map(book => (
                    <tr key={book.key}>
                        <td><Link to={book.id}>{book.title}</Link></td>
                        <td>{book.publishers[0]}</td>
                        <td>{book.publish_year}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

function BookItems(props) {
    const { books } = props;

    const Books = books.map((book, index) => (
        <BookCard book={book} key={"book" + index} />
    ));

    return (
        <div className="book-grid">
            {Books}
        </div>
    )
}

export default EditionsView;