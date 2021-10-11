import React from "react";
import "./Request.css";

/* Services */
import api from "../../services/ApiConfig";

/* React-Bootstrap */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/* Formik */
import { useFormik } from "formik";

function Request() {
  const handleFile = (event) => {
    console.log(event.currentTarget.files[0]);
  };

  const initialValues = {
    dpto: 0,
    idUser: 10019,
    problem: "",
    file: "",
    solution: "",
  };

  const onSubmit = ({ idUser, problem, dpto, solution }) => {
    dpto = Number(dpto);
    api
      .post(`/Request`, {
        problem: problem,
        idDepartment: dpto,
        idUser: idUser,
        solution: solution,
      })
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.dpto) {
      errors.dpto = "La selección de un departamento es requerida";
    }
    if (!values.problem) {
      errors.problem = "Debe existir algun problema para crear una solicitud";
    } else if (values.problem.length < 50) {
      errors.problem = "Por favor describa a detalle";
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
          <Form.Label>Departamento</Form.Label>
          <Form.Select
            className="request-form-input"
            aria-label="Departamento"
            name="dpto"
            onChange={formik.handleChange}
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
        {formik.errors.dpto ? (
          <div className="error">* {formik.errors.dpto}</div>
        ) : null}

        <Form.Group className="mb-3">
          <Form.Label>Solicitante</Form.Label>
          <Form.Control
            className="request-form-input"
            name="idUser"
            type="number"
            readOnly
            placeholder={initialValues.idUser}
            onChange={formik.handleChange}
            value={formik.values.idUser}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Describa su Problema</Form.Label>
          <Form.Control
            className="request-form-input"
            name="problem"
            as="textarea"
            rows={3}
            onChange={formik.handleChange}
            value={formik.values.problem}
          />
          {formik.errors.problem ? (
            <div className="error">* {formik.errors.problem}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Capturas</Form.Label>
          <Form.Control
            className="request-form-input"
            name="file"
            type="file"
            multiple
            onChange={handleFile}
            value={formik.values.file}
          />
        </Form.Group>
        <Button className="btn-submit" variant="success" type="submit">
          Crear Solicitud
        </Button>
      </Form>
    </>
  );
}

export default Request;
