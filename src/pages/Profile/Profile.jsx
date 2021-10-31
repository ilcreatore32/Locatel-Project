import React from "react";
import profileImage from "./profile.jpg";
import "./Profile.css";

/* React-Bootstrap */
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Profile() {
  var authUser = JSON.parse(localStorage.getItem("user"));
  console.log(authUser);
  return (
    <>
      <Container>
        <div className="profile-grid">
          <div className="profile-details">
            <Image src={profileImage} roundedCircle />
            <h2>{`${authUser.name} ${authUser.lastName}`}</h2>
            <span className="lead">{`${authUser.idDepartment} - Extension`}</span>
          </div>
          <div className="profile-activity">
            <div>
              <ul>
                <li>
                  <h6>Nombre</h6>
                  <span>{`${authUser.name} ${authUser.lastName}`}</span>
                </li>
                <li>
                  <h6>Departamento</h6>
                  <span>{`${authUser.idDepartment}`}</span>
                </li>
                <li>
                  <h6>Correo</h6>
                  <span>{`${authUser.email}`}</span>
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
          <h6>Total de Solicitudes = {authUser.totalRequest}</h6>
          <h6>Solicitudes Solucionadas= {authUser.trueRequest}</h6>
          <h6>Solicitudes No Solucionadas = {authUser.falseRequest}</h6>
        </div>
      </Container>
    </>
  );
}

export default Profile;
