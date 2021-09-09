import React from "react";
import { useEffect, useState } from "react";

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
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function EditForm({ id }) {
  const [User, setUser] = useState({});

  useEffect(() => {
    api
      .get(`Users/${id}`)
      .then((result) => {
        let Data = result.data.data;
        setUser(Data);
      })
      .catch(console.log);
  }, [id]);

  let {
    name,
    lastName,
    password,
    email,
    idDepartment,
    totalRequest,
    trueRequest,
    falseRequest,
  } = User;

  const initialValues = {
    name,
    lastName,
    email,
    password,
    idDepartment,
    totalRequest,
    trueRequest,
    falseRequest,
  };

  const onSubmit = ({ name, lastName, password, email, idDepartment }) => {
    idDepartment = Number(idDepartment);
    api
      .put(`Users/${id}`, {
        name,
        lastName,
        password,
        email,
        id_Department: idDepartment,
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

  console.log(initialValues);

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <span className="user-id">
          id: <code>{id}</code>
        </span>
        <Row className="sign-up-row mt-3 mb-3">
          <Form.Group as={Col} controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="text"
              name="name"
              placeholder={name}
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
              placeholder={lastName}
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
              placeholder={email}
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
              placeholder={password}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Departamento</Form.Label>
            <Form.Control
              className="sign-up-input"
              aria-label="Departamento"
              name="dptoStatus"
              type="number"
              value={idDepartment}
              readOnly
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cambiar Departamento</Form.Label>
            <Form.Select
              className="sign-up-input"
              aria-label="Cambiar Departamento"
              name="idDepartment"
              onChange={formik.handleChange}
              value={formik.values.idDepartment}
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
        <hr className="mb-3 mt-3" />
        <Row className="mb-3">
          <h6 className="text-center">Solicitudes</h6>
          <Form.Group as={Col} className="text-center mt-3 mb-3">
            <Form.Label>Total</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="number"
              value={totalRequest}
              readOnly
            />
          </Form.Group>
          <Form.Group as={Col} className="text-center mt-3 mb-3">
            <Form.Label>Solventadas</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="number"
              value={trueRequest}
              readOnly
            />
          </Form.Group>
          <Form.Group as={Col} className="text-center mt-3 mb-3">
            <Form.Label>Pendientes</Form.Label>
            <Form.Control
              className="sign-up-input"
              type="number"
              value={falseRequest}
              readOnly
            />
          </Form.Group>
        </Row>
        <Button className="btn-submit" variant="success" type="submit">
          <FontAwesomeIcon icon={faEdit} />
          Editar Usuario
        </Button>
      </Form>
    </>
  );
}

export default EditForm;
