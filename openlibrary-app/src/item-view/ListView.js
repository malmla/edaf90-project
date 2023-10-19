import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack";

const lists = [];

function ListView() {
  return (<div>
    <Stack className="container" direction="horizontal">
      <div className="list-list p-2">
        <ListGroup variant="flush">
          {
            //for each list, make a listgroup.item, usestate with index to choose which list to render
          }
          <ListGroup.Item className="list-item">list object 1</ListGroup.Item>
          <ListGroup.Item className="list-item">Dapibus ac facilisdis in</ListGroup.Item>
          <ListGroup.Item className="list-item">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="list-container p-2">
        <Card className="list-card">
          <Card.Title className="list-card-title me-auto">List name</Card.Title>
          <Card.Body className="list-description">List description that should be somewhat long i guess but not too long because the main thing is the list</Card.Body>
          <ListGroup variant="flush">
            {/* for the chosen list (index in usestate) generate listitems for all items */}
            <ListGroup.Item className="list-item">list object 1</ListGroup.Item>
            <ListGroup.Item className="list-item">Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item className="list-item">Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </Stack>
      <div className="action-row">
        <ButtonGroup>
          <Button variant="primary">Add new list</Button>
          <Button variant="secondary">Edit list description</Button>
          <Button variant="danger">Delete list</Button>
        </ButtonGroup>
      </div>
  </div>
)}

export default ListView;