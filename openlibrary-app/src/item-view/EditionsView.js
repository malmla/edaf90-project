import {Link, useLoaderData, useParams} from "react-router-dom";
import BookCard from "../components/BookCard";
import {Container, Row, Table} from 'react-bootstrap';



function EditionsView(){
    const data = useLoaderData();
    const editions = data.editions;
    const desc = data.work ? data.work.value : "No description found";
    return (
        <div>
            <Container>
                <Row>
                <h1>Description</h1>
                {desc}
                </Row>

                <Row>
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
                </Row>
            </Container>
        </div>
    )
}

export default EditionsView;