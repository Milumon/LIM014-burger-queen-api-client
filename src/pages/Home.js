import React, {useState} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Products from '../pages/Tabs/Products';
import { TabsData } from '../Components/TabsData';


function Home() {

   const [key, setKey] = useState('home');


  return (

    <div className="home_content">
        <Container style={{ marginLeft: '0px' }}>
            <Row>
                <Col sm={8} style={{padding: "30px"}}>

                <h1>Q' Burger</h1>
                <p>Fechaaaaaaaaaaa</p> 
                    
                <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                > 

                {TabsData.map((item, index) => {
                    return (
                        <Tab eventKey={item.name} key={index}  title={item.title}> 
                        <Products filter={item.categoryFilter} />
                        </Tab>
                    );
                    })}   
 
 
                </Tabs>                   
                
                
                </Col>
                <Col sm={4}>sm=4</Col>
            </Row>
        </Container>
    </div>
 
  );
}

export default Home;