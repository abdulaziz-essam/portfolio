import React from 'react'
import './landing.css'
import {Container , Row ,Col ,Button} from 'react-bootstrap'
import 'animate.css';
import img from '../../img/programmer.png'
export default function LandingPage() {
  return (
    <div>

<Container>
      <Row>
        <Col>
        <h1 class="animate__animated animate__swing animate__zoomIn"> hi i'm a full-stack web developer</h1>
        <Button variant="secondary" className='github'> <a href='https://github.com/aek20' target="_blank">GitHub account</a></Button>
        </Col>
        <Col className='sec-col'> 
     <img className="dev-icon" src={img}/>
        </Col>
      </Row>
    </Container>
    
    <div className='projects'>
    <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by prettycons - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icons created by Freepik - Flaticon</a>
    <Container>
      <Row>
        <Col xs><h1>chatbot builder </h1>
        
        <h2>my GRADUAQTE PROJECT i work now with my supervisor to publish it</h2>
        </Col>
        <Col xs><h1>Book Rating website </h1>
        
        <h2>my GRADUAQTE PROJECT i work now with my supervisor to publish it</h2></Col>
        <Col xs><h1>chatbot builder </h1>
        
        <h2>my GRADUAQTE PROJECT i work now with my supervisor to publish it</h2>
        </Col>
      </Row>
    </Container>


    </div>

    </div>
  )
}
