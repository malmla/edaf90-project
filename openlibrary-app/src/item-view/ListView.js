import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack";
import { useState } from "react";

const lists = [{"name": "favoriter1", "list_items":["abc", "dfe", "blabla", "herkules"], "description": "några favorittermer för temporära listor"},
 {"name": "pingviiner", "list_items":["poirot", "köttbulle", "falukorv"], "description": "några saker som definitivt inte är pingiviner"}, 
 {"name": "lunch", "list_items": ["fiskpinne", "potatis"], "description": "vad jag åt till lunch idag"}];


function ListView() {
  const [index, setIndex] = useState(0);

  return (<div>
    <Stack className="container" direction="horizontal">
      <div className="list-list p-2">
        <ListGroup variant="flush">
          {
            //for each list, make a listgroup.item, usestate with index to choose which list to render
            lists.map(list => {
              return (
                <ListGroup.Item className="list-item" 
                  onClick={e => setIndex(lists.indexOf(list))}
                  key={list.name}>
                    {list.name}
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
      </div>
      <div className="list-container p-2">
        <Card className="list-card">
          <Card.Title className="list-card-title me-auto">{lists[index].name}</Card.Title>
          <Card.Body className="list-description">{lists[index].description}</Card.Body>
          <ListGroup variant="flush">
            {/* for the chosen list (index in usestate) generate listitems for all items */
              lists[index].list_items.map(item => {
                return (
                  <ListGroup.Item className="list-item" key={item}>{item}</ListGroup.Item>
                )
              })
            }
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