import React from "react";
import Container from "react-bootstrap/Container";

function Profile() {
  return (
    <>
      <Container>
        <div className="profile-grid">
          <div className="profile-details">
            <h2>Nombre</h2>
            <span className="lead">Departamento - Extension</span>
          </div>
          <div className="profile-activity">
            <div>
              <ul>
                <li>
                  <h6>Nombre</h6>
                  <span>name</span>
                </li>
                <li>
                  <h6>Departamento</h6>
                  <span>dpto</span>
                </li>
                <li>
                  <h6>Correo</h6>
                  <span>mail</span>
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
        </div>
      </Container>
    </>
  );
}

export default Profile;
