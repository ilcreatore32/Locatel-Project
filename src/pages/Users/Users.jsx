import React from "react";
import { useEffect, useState } from "react";
import "./Users.css";

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
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Users() {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    await api
      .get("Users")
      .then((result) => {
        let Data = result.data.data;
        setUsers(Data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const handleRemove = (id) => {
    api.delete(`Users/${id}`).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };

  return (
    <>
      <div className="users-view">
        <h3 className="text-center">Usuarios</h3>
        <div className="users-panel">
          <Window title="Añadir Usuario" variant="success" icon={faUserPlus}>
            <CreateForm />
          </Window>
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              <p>
                <span className="counter">
                  <FontAwesomeIcon icon={faUser} />
                  {Users.length}
                </span>{" "}
                Usuarios Encontrados{" "}
              </p>
            </>
          )}
        </div>

        <ListGroup as="ul" className="users-list">
          {Users.map(({ id, name, lastName, idDepartment }) => (
            <ListGroup.Item key={id}>
              <div className="users-list-item">
                {name} {lastName} - Dpto: {idDepartment}
                <div className="buttons">
                  <Window
                    title="Editar"
                    variant="outline-primary"
                    icon={faEdit}
                    size="sm"
                  >
                    <EditForm id={id} />
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

export default Users;
