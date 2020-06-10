import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_12 from '../images/Nikhil_12.jpg';
import Nikhil_13 from '../images/Nikhil_13.jpg';

class ResponsibleFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img height = "500px" src="https://www.scotcash.net/media/66661/money-2724241_1920.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <br/> 
                        <br/> 	
                        <h1 style = {{fontSize: '450%'}} ><strong>Responsible Finance</strong></h1>
                    </div>
                </div>

                <br/>

                <Container fluid>
                    <Card>
                        <Card.Header> 
                            <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3088612">
                            <h3> Economic Impact of Right-To-Work Laws </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Andras Danis</a>
                                ,and <a target="_blank" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2099625">Alex Hsu</a>
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {6}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {6}>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        We analyze the economic and financial impact of right-to-work (RTW) laws in the US. Using data from collective bargaining agreements, 
                                        we show that there is a decrease in wages for unionized workers after RTW laws. 
                                        Firms increase investment and employment but reduce financial leverage. 
                                        Labor-intensive firms experience higher profits and labor-to-asset ratios. 
                                        Dividends and executive compensation also increase post-RTW. Our results are consistent with a 
                                        canonical theory of the firm augmented with an exogenous bargaining power of labor and suggest that RTW laws impact corporate policies by 
                                        decreasing that bargaining power.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We show that there is a decrease in wages for unionized workers upon analyzing
                                         the economic and financial impact of right-to-work (RTW) laws in the US.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>


                    <Card>
                        <Card.Header> 
                            <a href = "https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2013.1863">
                            <h3> Environmental Externalities and Cost of Capital </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
           
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {6}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {6}>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        I analyze the impact of a firm's environmental profile on its cost of 
                                        equity and debt capital. Using implied cost of capital derived from analysts' 
                                        earnings estimates, I find that investors demand significantly higher expected 
                                        returns on stocks excluded by environmental screens (such as hazardous chemical, 
                                        substantial emissions, and climate change concerns) compared to firms without such environmental
                                         concerns. Lenders also charge a significantly higher interest rate on the bank loans issued to 
                                         firms with these environmental concerns. I provide evidence that the environmental profile of a 
                                         firm is not simply proxying for an omitted component of its default risk. Further, firms with 
                                         these environmental concerns have lower institutional ownership and fewer banks participate in 
                                         their loan syndicate than firms without such environmental concerns. These results suggest that 
                                         exclusionary socially responsible investing and environmentally sensitive lending can have a 
                                         material impact on the cost of equity and debt capital of affected firms. This paper was accepted
                                          by Brad Barber, finance.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        I provide evidence that the environmental profile of a 
                                         firm is not simply proxying for an omitted component of its default risk. Further, firms with 
                                         these environmental concerns have lower institutional ownership and fewer banks participate in 
                                         their loan syndicate than firms without such environmental concerns.
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

export default ResponsibleFinance;