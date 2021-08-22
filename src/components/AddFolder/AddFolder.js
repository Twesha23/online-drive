import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Modal,Form} from "react-bootstrap";

function AddFolder({onCreateNewFolder}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="mr-2 pa2 ">
        <Button variant="success" onClick={handleShow}>
          New Folder
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <b>Create a new folder</b>
          </Modal.Header>
          <Form onSubmit={ e => onCreateNewFolder(e)}>
          <Modal.Body>
          <Form.Group>
              <Form.Label>Name of the folder</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter folder name"
                required
              />
            </Form.Group>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit" onClick={handleClose}>
              Create Folder
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
}

export default AddFolder;
  
