import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/* Formik */
import { useFormik } from "formik";

function Request() {
  /* const validate = (values) => {
    const errors = {};
    if (!values.dpto) {
      errors.dpto = "La selección de un departamento es requerida";
    }
    if (!values.name) {
      errors.name = "Debemos saber quien eres";
    } else if (values.name.length < 20) {
      errors.name = "Por favor coloca tu nombre completo";
    }

    if (!values.problem) {
      errors.problem = "Debe existir algun problema para crear una solicitud";
    } else if (values.problem.length < 50) {
      errors.problem = "Por favor describa a detalle";
    }
    return errors;
  };
  */
  const handleFile = event => {
    console.log(event.currentTarget.files[0]);
  }
  
  const formik = useFormik({
    initialValues: {
      dpto: "",
      name: "",
      problem: "",
      file: null,
    },
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("fakeID", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Departamento</Form.Label>
          <Form.Select
            aria-label="Departamento"
            name="dpto"
            onChange={formik.handleChange}
          >
            <option>Seleccione un Dpto.</option>
            <option value="1">Dirección</option>
            <option value="2">Talento Humano</option>
            <option value="3">Compras</option>
            <option value="4">Logística</option>
            <option value="5">Almacén</option>
            <option value="6">Caja</option>
            <option value="7">Seguridad</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>¿Quien eres?</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Trabajador"
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Describa su Problema</Form.Label>
          <Form.Control
            name="problem"
            as="textarea"
            rows={3}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Capturas</Form.Label>
          <Form.Control
            name="file"
            type="file"
            multiple
            onChange={handleFile}
          />
        </Form.Group>
        <Button className="left" variant="success" type="submit">
          Crear Solicitud
        </Button>
      </Form>
    </>
  );
}

export default Request;
