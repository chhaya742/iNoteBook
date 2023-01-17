import React from "react";
import { Form, Row, Card, Col } from "react-bootstrap";

const ResponseLog = (props) => {
  const { activeRow } = props;
 

  return (
    <div>
      <div className="userform">
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Form>
              <h4>Response Log</h4>
              <Form.Group as={Row} className="col col-md-12" controlId="errorCode" style={{padding: "5px"}}>
                <Form.Label column sm="5">
                ErrorCode
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    readOnly
                    value={JSON.parse(activeRow).errorCode ?? "errorCode"}
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="col col-md-12" controlId="message" style={{padding: "5px"}}>
                <Form.Label column sm="5">
                Message
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    readOnly
                    value={JSON.parse(activeRow).message ?? "message"}
                  ></Form.Control>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ResponseLog;