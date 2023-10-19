import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { ListContext, ListDispatchContext } from '../../App';


function ListModal(props) {
  const [show, setShow] = useState(false);
  const [inList, setInList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const lists = useContext(ListContext);
  const dispatch = useContext(ListDispatchContext);

  function handleAdd (listName) {
    dispatch({
      type: "add-to",
      name: listName,
      key: props.objKey,
      title: props.title,
    });
  }

  const bool = (list) => {
    return Object.values(list.list_items).find(entry => entry.key === props.objKey);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add to list
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Choose a list to add the object to
            <ListGroup>
            {
                lists.map(list => {
                return (
                    <ListGroup.Item className="list-item" 
                    key={list.name} action onClick={() => handleAdd(list.name)}
                    disabled={bool(list)}
                    active={bool(list)}>
                        {list.name}
                    </ListGroup.Item>
                )
                })
            }
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListModal;