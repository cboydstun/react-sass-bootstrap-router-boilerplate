import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default function Home() {
    return (
        <Jumbotron>
            <h1>Hello world from home page!</h1>
            <p>Some random text</p>

            <Button variant="danger">CLICK ME</Button>
        </Jumbotron>
    )
}
