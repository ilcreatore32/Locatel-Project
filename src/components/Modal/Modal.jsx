import React from "react";
import { useState } from "react";
import "./Modal.css";

/* React-Bootstrap */
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

/* Font-Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Window(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="modal-button">
        <Button variant={props.variant} onClick={handleShow} size={props.size}>
          {props.title}
          {props.icon ? (
            <FontAwesomeIcon className="modal-btn-icon" icon={props.icon} />
          ) : (
            <span></span>
          )}
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
          <Modal.Title className="text-center"> {props.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}

export default Window;
