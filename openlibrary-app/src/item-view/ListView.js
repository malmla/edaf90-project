import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"
import Stack from "react-bootstrap/Stack";
import { useContext, useState } from "react";
import { ListContext, ListDispatchContext } from '../App.js';
import MakeListModal from "../components/MakeListModal/index.js";
import { Link } from "react-router-dom";

// {name, list_items[key, title], description}

function ListView() {
  const [index, setIndex] = useState(0);
  const lists = useContext(ListContext);
  const dispatch = useContext(ListDispatchContext);

  function handleDeleteList(list) {
    dispatch({
      type: "delete",
      list: list,
    });
    setIndex(0);
  }

  return (<div>
    <Stack className="container" direction="horizontal">
      <div className="list-list p-2">
        <ListGroup>
          {
            //for each list, make a listgroup.item, usestate with index to choose which list to render
            lists.map(list => {
              return (
                <ListGroup.Item className="list-item"
                  onClick={e => setIndex(lists.indexOf(list))}
                  key={list.name}
                  active={index === lists.indexOf(list)}>
                  {list.name}
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
      </div>
      <div className="list-container p-2">
        {lists.length > 0 ?
          <Card className="list-card">

            <Card.Title className="list-card-title me-auto">{lists[index].name}</Card.Title>
            <Card.Body className="list-description">{lists[index].description}</Card.Body>
            <ListGroup>
              {/* for the chosen list (index in usestate) generate listitems for all items */
                lists[index].list_items.map(item => {
                  return (
                    <Link to={item.key} >
                      <ListGroup.Item className="list-item" key={item}>{item.title}</ListGroup.Item>
                    </Link>
                  )
                })
              }
            </ListGroup>
          </Card>
          :
          <Card className="list-card">
            <Card.Title className="list-card-title me-auto">You have no lists yet!</Card.Title>
            <Card.Body className="list-description">The description of your lists will be shown here!</Card.Body>
          </Card>
        }
      </div>
    </Stack>
    <div className="action-row">
      <ButtonGroup>
        <MakeListModal />
        <Button variant="danger" onClick={() => handleDeleteList(lists[index])}>Delete list</Button>
      </ButtonGroup>
    </div>
  </div>
  )
}

export default ListView;