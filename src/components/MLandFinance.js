import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_12 from '../images/Nikhil_12.jpg';
import Nikhil_13 from '../images/Nikhil_13.jpg';

class MLandFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img height = "500px" src="https://www.techslang.com/wp-content/uploads/2019/06/artificial-intelligence-in-finance111-e1570189091293.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <br/> 
                        <br/> 	
                        <h1 style = {{fontSize: '500%'}} ><strong>Machine Learning</strong></h1>
                    </div>
                </div>

                <br/>

                <Container fluid>
                    <Card>
                        <Card.Header> 
                            <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2781784">
                            <h3> Hyperbole or Reality? Investor Response to Extreme Language in Earnings Conference Calls </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href= "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=1956651">Khrystyna Bochkay</a>
                                , and <a target="_blank" href= "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=255055">Jeffrey Hales</a>
                               
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
                                        We develop a dictionary of linguistic extremity in earnings conference calls,
                                         a setting where managers have considerable latitude in the language they use, to study 
                                         the role of extreme language in corporate reporting. Controlling for tone (positive vs. 
                                         negative) of language, we document that when managers use more extreme words in earnings 
                                         conference calls, trading volume around the call increases and stock prices react more strongly.
                                          In addition, both effects are more pronounced for firms with weaker information environments.
                                           Linguistic extremity also affects analyst opinions and contains information about a firm's 
                                           future operating performance. As such, our results provide evidence that markets are influenced 
                                           not just by what managers say, but also how they say it, with extreme language playing an important
                                            role in communicating reality and not merely reflecting hyperbole.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We document that when managers use more extreme words in earnings 
                                        conference calls, trading volume around the call increases and stock prices react more strongly.
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

export default MLandFinance;