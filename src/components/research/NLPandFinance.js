import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_1 from '../../images/Nikhil_1.png';
import Nikhil_2 from '../../images/Nikhil_2.png';
import Nikhil_3 from '../../images/Nikhil_3.png';
import Nikhil_4 from '../../images/Nikhil_4.png';
import Nikhil_5 from '../../images/Nikhil_5.png';
import {loremIpsum} from 'react-lorem-ipsum';
import NLPresearchcardlist from './NLPresearchcardlist';
import './research.css';

class NLPandFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img className = 'blur' height='350px' src="https://www.sr-sv.com/wp-content/uploads/2019/06/NLP_0000.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">	
                        <h1>Natural Language Processing</h1>
                    </div>
                </div>

                <br/>

                <NLPresearchcardlist />

                <Container fluid>
                    <Card className = "researchcard">
                        <Card.Header> 
                            <h4><b> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </b></h4>
                            <h5> - <a target="_blank" rel="noopener noreferrer" href= "https://www.nikhil-paradkar.com/home">Lorem Ipsum</a></h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_1}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_2}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_3}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_4}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_5}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
                                        <p align = "justify">
                                            <strong>Abstract: </strong>
                                            {loremIpsum()}
                                            <br/>
                                            <br/>
                                            <strong>Key Takeaway: </strong>
                                            {loremIpsum()}
                                        </p>
                                    </Container>
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

export default NLPandFinance;