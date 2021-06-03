import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Grid() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>1 column 1 row</Col>
                </Row>

                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>

                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>

                            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>

            <Row>
                <Col>1 of 3</Col>
                <Col xs={9}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
            </Row>

            </Container>
        </div>
    )
}
