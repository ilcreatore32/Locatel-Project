import React from 'react'
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

function Request() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Departamento</Form.Label>
          <Form.Select aria-label="Departamento">
            <option>Seleccione un Dpto.</option>
            <option value="1">Dirección</option>
            <option value="2">Talento Humano</option>
            <option value="4">Compras</option>
            <option value="5">Logística</option>
            <option value="6">Almacén</option>
            <option value="7">Caja</option>
            <option value="8">Seguridad</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>¿Quien eres?</Form.Label>
          <Form.Control type="text" placeholder="Trabajador" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Describa su Problema</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Capturas</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Button className="left" variant="success" type="submit">
          Crear Solicitud
        </Button>
      </Form>
    </>
  );
}

export default Request
