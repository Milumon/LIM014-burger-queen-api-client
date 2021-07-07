import React from 'react';
/* import styled from 'styled-components' */
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Products.css'
import { Row } from 'react-bootstrap';


/* const styleCard = styled(Card)`
    width: 16rem;
    
` */

function Products(props) {
    return (
        <Row className="justify-content-around">

            <h5>Choose Dishes </h5>
            
            <Card style={{ width: '16rem', margin: "10px 0px"}}  className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>    

            <Card style={{ width: '16rem', margin: "10px 0px"}}  className="text-center">
            <Card.Img variant="top" src="../../" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>  

            <Card style={{ width: '16rem', margin: "10px 0px"}}  className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>     

            <Card style={{ width: '16rem', margin: "10px 0px"}}  className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>     

                        <Card style={{ width: '16rem', margin: "10px 0px"}}  className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>

            </Card>  
            <Card style={{ width: '16rem', margin: "10px 0px"}}  className="text-center">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>       
        </Row>
    );
}

export default Products;