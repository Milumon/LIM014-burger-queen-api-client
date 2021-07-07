import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (

    <div className="home_content">
        <Container>
            <Row >
            <Col sm={8}>sm=8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Col>
            <Col sm={4}>sm=8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa4</Col>
            </Row>
        </Container>
</div>
 
  );
}

export default Home;