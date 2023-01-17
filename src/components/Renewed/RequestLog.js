import React from "react";
import { Form, Row, Card, Col } from "react-bootstrap";

const RequestLog = (props) => {
    const { activeRow } = props;
    console.log(JSON.parse(activeRow).user);

    return (
        <div>
            <div className="userform">
                <Card style={{ width: "30rem" }}>
                    <Card.Body>
                        <Form>
                            <h4>Response Log</h4>
                            <Form.Group as={Row} className="col col-md-12" controlId="errorCode" >
                                <h5>Affiliate</h5>

                                <Form.Group as={Row} className="col col-md-12" controlId="errorCode" >
                                    <Form.Label column sm="5">
                                        identifier
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            readOnly
                                            value={JSON.parse(activeRow).affiliate.identifier ?? "errorCode"}
                                        ></Form.Control>
                                    </Col>
                                </Form.Group>

                            </Form.Group>
                            <Form.Group as={Row} className="col col-md-12" controlId="errorCode" >
                                <h5>Subscription</h5>
                                <Form.Group as={Row} className="col col-md-12" controlId="message" >
                                    <Form.Label column sm="5">
                                    costControl
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control style={{ padding: "0.223rem 1rem"}}
                                            readOnly
                                            value={JSON.parse(activeRow).subscription.costControl ?? "costControl"}
                                        ></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="col col-md-12" controlId="message" >
                                    <Form.Label column sm="5">
                                    offerId
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control style={{ padding: "0.223rem 1rem"}}
                                            readOnly
                                            value={JSON.parse(activeRow).subscription.offerId ?? "offerId"}
                                        ></Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="col col-md-12" controlId="message" >
                                <Form.Label column sm="5">
                                voiceMail
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control style={{ padding: "0.223rem 1rem"}}
                                        readOnly
                                        value={JSON.parse(activeRow).subscription.voiceMail ?? "offerId"}
                                    ></Form.Control>
                                </Col>
                            </Form.Group>
                            </Form.Group>

                            <Form.Group as={Row} className="col col-md-12" controlId="errorCode" >
                            <h5>User</h5>
                            <Form.Group as={Row} className="col col-md-12" controlId="errorCode" >
                            <Form.Label column sm="5">
                            firstName
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control style={{ padding: "0.223rem 1rem"}}
                                        readOnly
                                        value={JSON.parse(activeRow).user.firstName ?? "errorCode"}
                                    ></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="col col-md-12" controlId="errorCode" >
                            <Form.Label column sm="5">
                            lastName
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control style={{ padding: "0.223rem 1rem"}}
                                        readOnly
                                        value={JSON.parse(activeRow).user.lastName ?? "errorCode"}
                                    ></Form.Control>
                                </Col>
                            </Form.Group>
                            </Form.Group>
                                


                            <Form.Group as={Row} className="col col-md-12" controlId="message" >
                                <Form.Label column sm="5">
                                    numberDetails
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control style={{ padding: "0.223rem 1rem"}}
                                        readOnly
                                        value={JSON.parse(activeRow).numberDetails ?? "message"}
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

export default RequestLog;