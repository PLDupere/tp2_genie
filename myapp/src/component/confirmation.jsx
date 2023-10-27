// importation react
import React from "react";
// importation boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// importation fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCheck,
  faX,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
// importation css
import "../css/index.css"

const Confirmation = () => {
  return (
    /*
        Composant des Ressource financiere
        Revenus d’emploi et autresrevenus de l’année dernière année ainsi que les revenus potentiels de l’année en cours.
    */

    <Container controlId="Confirmation">
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
          <h1 className="text-center">Demande d'aide financière 5/5 a revoir</h1>
          <form action="url" method="post">
            <Row>
              <h2>A discuté !!!</h2>
            </Row>
            {/*  */}
            <Form.Check
              required
              label="J'accepte les termes d'utilisation."
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
            <div className="text-center" controlId="DossierBoutons">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faBackwardStep} /> Retour
              </Button>{" "}
              <Button variant="warning">
                <FontAwesomeIcon icon={faCheck} /> Envoyer
              </Button>{" "}
              <Button variant="danger">
                <FontAwesomeIcon icon={faX} /> Annulation
              </Button>{" "}
            </div>
          </form>
        </Col>
        <Col>{/**/}</Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export { Confirmation };
