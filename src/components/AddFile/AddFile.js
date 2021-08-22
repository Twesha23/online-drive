import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Modal,Form} from "react-bootstrap";

function AddFile({onCreateNewFile}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className=" mr-2 mr6 pa2">
        <Button variant="success" onClick={handleShow}>
          New File
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <b>Create a new file</b>
          </Modal.Header>
          <Form onSubmit={ e => onCreateNewFile(e)}>
          <Modal.Body>
          <Form.Group>
              <Form.Label>Name of the file</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter file name"
                required
              />
            </Form.Group>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit" onClick={handleClose}>
              Create File
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
}

export default AddFile;
  
