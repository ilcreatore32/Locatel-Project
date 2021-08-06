import React from 'react'
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button';

function Login() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="username@locatel.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Acceder
          </Button>
        </Form>
      </>
    );
}

export default Login
