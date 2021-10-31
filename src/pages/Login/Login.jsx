import React, { useState } from "react";
import "./Login.css";

/* API */
import api from "../../services/ApiConfig";

/* React-Router */
import { Link } from "react-router-dom";

/* React-Bootstrap */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/* Font Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

/* Formik */
import { useFormik } from "formik";

/* SweetAlert */
import swal from "sweetalert";

function Login() {
  const [Users, setUsers] = useState([]);

  async function fetchData() {
    await api
      .get("Users")
      .then((result) => {
        let Data = result.data.data;
        setUsers(Data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function authUser({ email, password }) {
    await fetchData();
    const auth = (user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    };
    let isAuth = Users.find((user) => auth(user));
    return isAuth;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await authUser(values).then((user) => {
        welcome(user);
        user = JSON.stringify(user);
        localStorage.setItem("user", user);
      });
    },
  });

  const welcome = (user) => {
    if (user) {
      return swal(
        `Bienvenido ${user.name}!`,
        "Te has loggeado correctamente",
        "success"
      );
    } else {
      return swal(`Error`, "Te has loggeado incorrectamente", "error");
    }
  };

  return (
    <>
      <div className="login-container">
        <Form onSubmit={formik.handleSubmit}>
          <h3 className="text-center">Inicio de Sesión</h3>
          <Form.Floating className="mb-3">
            <Form.Control
              className="login-input"
              id="email"
              name="email"
              type="email"
              placeholder="NApellido@Locatel.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="Email">Correo Electronico</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              className="login-input"
              id="password"
              name="password"
              type="password"
              placeholder="ClaveSecreta123*"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <label htmlFor="Password">Contraseña</label>
          </Form.Floating>
          <div className="login-links mt-2">
            <Link to="/SignUp">Registrar Usuario</Link>
          </div>
          <Button
            className="mt-3 login-btn btn-submit"
            variant="success"
            type="submit"
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            Acceder
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
