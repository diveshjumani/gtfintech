import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Cog1 from '../../images/Cog1.png';
import Cog2 from '../../images/Cog2.png';
import Cog3 from '../../images/Cog3.png';
import Cog4 from '../../images/Cog4.png';
import household_finance from '../../images/household_finance.jpg';
import './research.css';

class HouseholdFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img className = 'blur' height='350px' src={household_finance} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <h1>Household Finance</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Container fluid>
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.bus.miami.edu/_assets/pdfs/thought-leadership/umbfc/papers-2017/Cognitive%20Reference%20Points%20Left%20Digit%20Effect%20and%20Clustering.pdf">
                            <h4><b> Cognitive Reference Points, the Left-Digit Effect, and Clustering in Housing Markets </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                and 
                                Vincent Yao  
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Cog1}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Cog2}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Cog3}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Cog4}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        Using a quasi-experimental setting of two similar properties listed only $100 apart, but with a different left digit, 
                                        we document that properties listed with smaller left digits are 3.8% more likely to sell, stay 5% fewer days on market, 
                                        and sell for 0.1% more. Additionally, buyers of these homes are more likely to have a lower credit score, lower income, 
                                        higher leverage and pay a higher interest rate on their mortgage, resell for a lower rate of return, and are more 
                                        sluggish in refinancing their mortgages. Our results highlight how behavioral biases can affect even high-value 
                                        purchases such as housing.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        In this paper, we analyze whether households exhibit behavioral biases in housing transactions. 
                                        Specifically, we analyze whether the left digit of the listing price has a significant impact on 
                                        the sales transaction and whether these buyers make other mistakes in their housing and mortgage decisions.
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

export default HouseholdFinance;