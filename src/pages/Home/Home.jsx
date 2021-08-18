import React from "react";

/* React-Bootstrap */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

/* Components */
import Window from "../../components/Modal/Modal";
import Details from "../../components/Details/Details";

function Home() {
  return (
    <>
      <Container>
        <h1>Tus Solicitudes: </h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Id: </Card.Title>
            <Window title="Detalles de la Solicitud" variant="dark">
              <Details />
            </Window>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;
