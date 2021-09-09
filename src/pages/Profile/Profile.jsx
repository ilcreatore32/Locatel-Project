import React from "react";
import { useEffect, useState } from "react";
import profileImage from "./profile.jpg";
import "./Profile.css";

/* Services */
import api from "../../services/ApiConfig";

/* React-Router */
import { useParams } from "react-router-dom";

/* React-Bootstrap */
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Profile() {
  const [user, setUser] = useState([]);
  var { Id } = useParams();

  useEffect(() => {
    const userId = Id;
    api
      .get("Users/"+ userId)
      .then((result) => {
        let Data = result.data.data;
        setUser(Data);
      })
      .catch(console.log);
  }, [Id]);

  return (
    <>
      <Container>
        <div className="profile-grid">
          <div className="profile-details">
            <Image src={profileImage} roundedCircle />
            <h2>{`${user.name} ${user.lastName}`}</h2>
            <span className="lead">{`${user.idDepartment} - Extension`}</span>
          </div>
          <div className="profile-activity">
            <div>
              <ul>
                <li>
                  <h6>Nombre</h6>
                  <span>{`${user.name} ${user.lastName}`}</span>
                </li>
                <li>
                  <h6>Departamento</h6>
                  <span>{`${user.idDepartment}`}</span>
                </li>
                <li>
                  <h6>Correo</h6>
                  <span>{`${user.email}`}</span>
                </li>
                <li>
                  <h6>Extensión</h6>
                  <span>number</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-activity text-center">
          <h3>Estadisticas de Solicitudes</h3>
          <h6>Total de Solicitudes = {user.totalRequest}</h6>
          <h6>Solicitudes Solucionadas= {user.trueRequest}</h6>
          <h6>Solicitudes No Solucionadas = {user.falseRequest}</h6>
        </div>
      </Container>
    </>
  );
}

export default Profile;
