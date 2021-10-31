import React from "react";
import { useEffect, useState } from "react";

/* React-Bootstrap */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

/* Services */
import api from "../../services/ApiConfig";

/* CSS Style */
import "./Home.css";

/* Font-Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Window from "../../components/Modal/Modal";
import Details from "../../components/Details/Details";
import Loading from "../../components/Loading/Loading";

function Home() {
  const [Requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Search, setSearch] = useState(null);

  async function fetchData() {
    await api
      .get("Request")
      .then((result) => {
        console.log(result);
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(Search);
  };

  return (
    <>
      <Container>
        <div className="home-view">
          <div>
            <h2 className="text-center">Tus Solicitudes</h2>
            {loading ? (
              <Loading />
            ) : (
              <>
                {" "}
                <div className="toolbar">
                  <p>
                    <span className="counter">
                      <FontAwesomeIcon icon={faEnvelope} />
                      {Requests.length}
                    </span>{" "}
                    Solicitudes Encontradas{" "}
                  </p>
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                    <Form.Control
                      className="search"
                      placeholder="Search..."
                      type="text"
                      value={Search}
                      onChange={handleSearch}
                    />
                  </InputGroup>
                </div>
                <hr />
              </>
            )}
          </div>
          <div className="cards-container">
            {Requests.map((req) => (
              <Card key={req.id} className="card-shadow" style={{ width: "" }}>
                <Card.Body>
                  <Card.Title className="cards-body-flex">
                    Id: {req.id} User:{req.idUser}
                  </Card.Title>
                  <Window className="cards-btn" title="Detalles" variant="dark">
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
