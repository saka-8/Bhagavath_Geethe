import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <Container fluid className="wrapper text-center">
      <h1>Bhagavad Gita</h1>
      <Link to="/chapters">
        <Button className="Chapter-button">Goto Chapters</Button>
      </Link>
    </Container>
  );
};

export default Home;
