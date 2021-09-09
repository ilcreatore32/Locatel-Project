import React from "react";

/* Services */
import api from "../../../services/ApiConfig";

/* Formik */
import { useFormik } from "formik";

/* React-Bootstrap */
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

/* Font-Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function CreateForm() {
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    dpto: 0,
  };

  const onSubmit = ({ name, lastName, password, email, dpto }) => {
    dpto = Number(dpto);
    api
      .post("/Users", {
        name,
        lastName,
        password,
        email,
        id_Department: dpto,
      })
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validate = (values) => {
    let errors = {};

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Row className="sign-up-row mt-3 mb-3">
          <Form.Group as={Col} controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="email"
              placeholder="NApellido@Locatel.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="password"
              placeholder="ClaveSecreta123*"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Departamento</Form.Label>
            <Form.Select
              className="sign-up-input"
              aria-label="Departamento"
              name="dpto"
              onChange={formik.handleChange}
              value={formik.values.dpto}
            >
              <option>Seleccione un Dpto.</option>
              <option value="1">Dirección</option>
              <option value="2">Sistemas</option>
              <option value="3">Caja</option>
              <option value="4">Administración</option>
              <option value="5">Compras</option>
              <option value="6">Logística</option>
              <option value="7">Almacén</option>
              <option value="8">Seguridad</option>
              <option value="9">Farmacia</option>
              <option value="10">Equipos Médicos</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className="btn-submit" variant="success" type="submit">
          <FontAwesomeIcon icon={faUserPlus} />
          Crear Usuario
        </Button>
      </Form>
    </>
  );
}

export default CreateForm;
