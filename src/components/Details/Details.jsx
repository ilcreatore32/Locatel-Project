import React from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

function Details(props) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Departamento</Form.Label>
          <Form.Control
            name="dpto"
            type="text"
            readOnly
            value={props.data.idDepartment}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Solicitante</Form.Label>
          <Form.Control
            name="name"
            type="text"
            readOnly
            value={props.data.idUser}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Problema</Form.Label>
          <Form.Control
            name="problem"
            readOnly
            as="textarea"
            rows={3}
            value={props.data.problem}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Solución</Form.Label>
          <Form.Control
            name="solution"
            readOnly
            as="textarea"
            rows={3}
            value={props.data.solution}
          />
        </Form.Group>
        <div>
          <Image src="" fluid />
        </div>
      </Form>
    </>
  );
}

export default Details;
