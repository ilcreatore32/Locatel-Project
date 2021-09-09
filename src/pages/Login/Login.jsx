import React from "react";
import "./Login.css";

/* React-Router */
import { Link } from "react-router-dom";

/* React-Bootstrap */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/* Font Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <>
      <div className="login-container">
        <Form>
          <h3 className="text-center">Inicio de Sesión</h3>
          <Form.Floating className="mb-3">
            <Form.Control
              className="login-input"
              id="Email"
              type="email"
              placeholder="NApellido@Locatel.com"
            />
            <label htmlFor="Email">Correo Electronico</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              className="login-input"
              id="Password"
              type="password"
              placeholder="ClaveSecreta123*"
            />
            <label htmlFor="Password">Contraseña</label>
          </Form.Floating>
          <div className="login-links mt-2">
            <Link to="/SignUp">Registrar Usuario</Link>
          </div>
          <Button className="mt-3 login-btn btn-submit" variant="success" type="submit">
            <FontAwesomeIcon icon={faSignInAlt} />
            Acceder
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
