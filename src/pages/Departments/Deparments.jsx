import React from "react";
import { useEffect, useState } from "react";
import "./Departments.css";

/* Components */
import Window from "../../components/Modal/Modal";
import CreateForm from "./forms/CreateForm";
import EditForm from "./forms/EditForm";
import Loading from "../../components/Loading/Loading";

/* Services */
import api from "../../services/ApiConfig";

/* React-Bootstrap */
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

/* Font-Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";

function Departments() {
  const [Departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    await api
      .get("Department")
      .then((result) => {
        let Data = result.data.data;
        setDepartments(Data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleRemove = (id) => {
    api.delete(`Department/${id}`).then(window.location.reload());
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <>
      <div className="departments-view">
        <h2 className="text-center">Departamentos</h2>
        <div className="departments-panel">
          <Window
            title="Añadir Departamento"
            variant="success"
            icon={faPlusSquare}
          >
            <CreateForm />
          </Window>
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              <p>
                <span className="counter">
                  <FontAwesomeIcon icon={faCube} />
                  {Departments.length}
                </span>{" "}
                Departamentos Encontrados{" "}
              </p>
            </>
          )}
        </div>
        <ListGroup as="ul" className="departments-list">
          {Departments.map(({ id, name }) => (
            <ListGroup.Item key={id}>
              <div className="departments-list-item">
                {id} - {name}
                <div className="buttons">
                  <Window
                    title="Editar"
                    variant="outline-primary"
                    icon={faEdit}
                    size="sm"
                  >
                    <EditForm id={id} name={name} />
                  </Window>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemove(id)}
                  >
                    <span>Eliminar</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default Departments;
