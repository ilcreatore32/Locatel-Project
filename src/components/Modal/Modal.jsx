import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button  from 'react-bootstrap/Button';
import { useState } from "react";

function Window(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className="modal-button">
        <Button
          variant="outline-success"
          onClick={handleShow}
          size={props.size}
        >
          {props.title}
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title> {props.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}

export default Window
