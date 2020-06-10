import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_1 from '../images/Nikhil_1.png';
import Nikhil_2 from '../images/Nikhil_2.png';
import Nikhil_3 from '../images/Nikhil_3.png';
import Nikhil_4 from '../images/Nikhil_4.png';
import Nikhil_5 from '../images/Nikhil_5.png';
import Nikhil_6 from '../images/Nikhil_6.png';
import Nikhil_7 from '../images/Nikhil_7.png';
import Nikhil_8 from '../images/Nikhil_8.png';
import Nikhil_9 from '../images/Nikhil_9.png';
import Nikhil_10 from '../images/Nikhil_10.png';
import Nikhil_11 from '../images/Nikhil_11.jpg';
import Nikhil_12 from '../images/Nikhil_12.jpg';
import Nikhil_13 from '../images/Nikhil_13.jpg';
import ResearchNavbar from './researchnavbar';
import {loremIpsum} from 'react-lorem-ipsum';

class Trading extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img height = "500px" src="https://news.tradimo.com/wp-content/uploads/2019/04/Swing-Trading-Indicators.png" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <br/> 
                        <br/> 	
                        <h1 style = {{fontSize: '500%'}} ><strong>Trading Strategies</strong></h1>
                    </div>
                </div>

                <br/>

                <Container fluid>
                <Card className = "researchcard">
                        <Card.Header> 
                        <h3> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </h3>
                            <h4> - <a target="_blank" href= "https://www.nikhil-paradkar.com/home">Lorem Ipsum</a></h4>
                            
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {6}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_1}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_2}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_3}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_4}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_5}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {6}>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        {loremIpsum()}
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        {loremIpsum()}
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>
                </Container>


            </div>
            );
  }
}

export default Trading;