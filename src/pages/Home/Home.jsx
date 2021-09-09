import React from "react";
import { useEffect, useState } from "react";

/* React-Bootstrap */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

/* Services */
import api from "../../services/ApiConfig";

/* CSS Style */
import "./Home.css";

/* Font-Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Window from "../../components/Modal/Modal";
import Details from "../../components/Details/Details";
import Loading from "../../components/Loading/Loading";

import error from "./error.png";

function Home() {
  const [Requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    await api
      .get("Request")
      .then((result) => {
        let Data = result.data;
        setRequests(Data.data);
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

  return (
    <>
      <Container>
        <div className="home-view">
          <div>
            <h2 className="text-center">Tus Solicitudes</h2>
            {loading ? (
              <Loading></Loading>
            ) : (
              <>
                <p>
                  <span className="counter">
                    <FontAwesomeIcon icon={faEnvelope} />
                    {Requests.length}
                  </span>{" "}
                  Solicitudes Encontradas{" "}
                </p>
                <hr />
              </>
            )}
          </div>
          <div className="cards-container">
            {Requests.map((req) => (
              <Card key={req.id} className="card-shadow" style={{ width: "" }}>
                <Card.Img variant="top" src={error} /* {req.file} */ />
                <Card.Body>
                  <Card.Title>Id: {req.id} </Card.Title>
                  <Window title="Detalles de la Solicitud" variant="dark">
                    <Details data={req} />
                  </Window>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
