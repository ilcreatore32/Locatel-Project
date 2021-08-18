import React from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

function Details() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Departamento</Form.Label>
          <Form.Control name="dpto" type="text" readOnly placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>¿Quien eres?</Form.Label>
          <Form.Control name="name" type="text" readOnly placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Describa su Problema</Form.Label>
          <Form.Control name="problem" readOnly as="textarea" rows={3} />
        </Form.Group>
        <div>
          <Image src="" fluid />
        </div>
      </Form>
    </>
  );
}

export default Details;
