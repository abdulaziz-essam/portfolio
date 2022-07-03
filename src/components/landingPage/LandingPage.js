import React from 'react'
import './landing.css'
import {Container , Row ,Col ,Button} from 'react-bootstrap'
import 'animate.css';
export default function LandingPage() {
  return (
    <div>

<Container>
      <Row>
        <Col>
        <h1 class="animate__animated animate__swing animate__zoomIn"> hi i'm a full-stack developer</h1>
        <Button variant="secondary" className='github'> <a href='https://github.com/aek20' target="_blank">GitHub account</a></Button>
        </Col>
        <Col className='sec-col'> 
     
        </Col>
      </Row>
    </Container>

    </div>
  )
}
