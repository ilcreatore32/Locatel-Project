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

function EditForm({ id, name }) {
  const initialValues = {
    id,
    name,
  };

  const onSubmit = ({ name }) => {
    api
      .put(`Department/${id}`, {
        name,
      })
      .then(window.location.reload());
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Todos los departamentos deben identificarse";
    }

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
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Codigo</Form.Label>
            <Form.Control
              name="id"
              type="number"
              className="sign-up-input"
              readOnly
              value={id}
            />
          </Form.Group>
          <Form.Group as={Col} className="cod">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="name"
              type="text"
              className="sign-up-input"
              placeholder={formik.values.name}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className="error">* {formik.errors.name}</div>
            ) : null}
          </Form.Group>
        </Row>

        <Button className="btn-submit" variant="success" type="submit">
          Editar Departamento
        </Button>
      </Form>
    </>
  );
}

export default EditForm;
