import React from "react";

/* Services */
import api from "../../../services/ApiConfig";

/* Formik */
import { useFormik } from "formik";

/* React-Bootstrap */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateForm() {
  const initialValues = {
    name: "",
  };

  const onSubmit = ({ name }) => {
    api
      .post("Department", {
        name,
      })
      .then(window.location.reload());
  };

  const validate = ({ name }) => {
    let errors = {};

    if (!name) {
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
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            type="text"
            className="sign-up-input"
            placeholder="Area Operativa"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">* {formik.errors.name}</div>
          ) : null}
        </Form.Group>
        <Button className="btn-submit" variant="success" type="submit">
          Crear Departamento
        </Button>
      </Form>
    </>
  );
}

export default CreateForm;
