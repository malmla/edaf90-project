import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { ListDispatchContext } from '../../App';


function MakeListModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useContext(ListDispatchContext);

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMakeList(title, desc);
    setTitle("");
    setDesc("");
    handleClose();
  }

  function handleMakeList(name, description) {
    dispatch({
      type: "make",
      name: name,
      description: description,
    });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make new list
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make new list</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="listTitle">
              <Form.Label>List title</Form.Label>
              <Form.Control placeholder="Enter title" onChange={e => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="listDescription">
              <Form.Label>Description textarea</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setDesc(e.target.value)} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

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

export default MakeListModal;