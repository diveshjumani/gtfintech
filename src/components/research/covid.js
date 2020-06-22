import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_1 from '../../images/Nikhil_1.png';
import Nikhil_2 from '../../images/Nikhil_2.png';
import Nikhil_3 from '../../images/Nikhil_3.png';
import Nikhil_4 from '../../images/Nikhil_4.png';
import Nikhil_5 from '../../images/Nikhil_5.png';
import coronavirus from '../../images/coronavirus.jpg';
import {loremIpsum} from 'react-lorem-ipsum';
import COVIDresearchcardlist from './covidresearchcardlist';
import './research.css';

class COVID extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img className = 'blur' height='350px' src={coronavirus} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <h1>COVID-19</h1>
               <p align = "justify"> The COVID-19 pandemic and subsequent economic shutdown  have wreaked havoc on global economies. A group of Georgia Tech students and faculty assisted by the Financial Services Innovation Lab at Georgia Tech and sponsored by the Speedwell Foundation, have created a <a href="https://gacovid19.org/">web site</a> to document the far-ranging effects of the virus on the health and well being of the statewide economy and its residents.  </p>
                    </div>
                </div>

                <br/>

                <COVIDresearchcardlist />

                <Container fluid>
                    <Card className = "researchcard">
                        <Card.Header> 
                            <h4><b> COVID-19 </b></h4>
                            <h5> - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href= "https://www.nikhil-paradkar.com/home">Lorem Ipsum</a></h5>
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

export default COVID;
