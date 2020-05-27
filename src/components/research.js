import React, {Component} from 'react';
import {Card, Image, Button, Container,Navbar,NavLink,Nav,Row,Col} from 'react-bootstrap';
import { Link, Element, animateScroll as scroll} from 'react-scroll'
import logo from '../images/GT_White.png';
import '../App.css';
import history from './history';

class Research extends Component{
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
    
      scrollToTop() {
        scroll.scrollToTop();
      }       
    render(){
        return(
            <div className = "research">
                <Navbar className ="second-navbar fixed-top"  variant="warning" bg ="warning" expand = "xl"> 
                 <Navbar.Brand className = "d-inline p-0 text-white" to ="/research"><strong>Research</strong></Navbar.Brand>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav className="mr-auto">
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="banking" to="banking" spy={true} smooth={true} duration={500} >
                                    Banking
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="hfin" to="hfin" spy={true} smooth={true} duration={500} >
                                    Household Finance
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="fintech" to="fintech" spy={true} smooth={true} duration={500} >
                                    FinTech and Innovation
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="rfin" to="rfin" spy={true} smooth={true} duration={500} >
                                    Responsible Finance
                                </Link>
                                </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="trading" to="trading" spy={true} smooth={true} duration={500} >
                                    Trading Strategies
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="creditrisk" to="creditrisk" spy={true} smooth={true} duration={500} >
                                    Credit Risk
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="MLfin" to="MLfin" spy={true} smooth={true} duration={500} >
                                    ML and Finance
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="NLPFin" to="NLPFin" spy={true} smooth={true} duration={500} >
                                    NLP and Finance
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="FI" to="FI" spy={true} smooth={true} duration={500} >
                                    Fixed Income
                                </Link>
                                </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                <Link activeClass="active" className="covid" to="covid" spy={true} smooth={true} duration={500} >
                                    COVID-19
                                </Link>
                            </NavLink>
                        </Nav>
                    </div>
                 </Navbar>

                <Card className="research bg-dark text-white">
                    <Card.Img fluid src="https://pbs.twimg.com/media/Ct8sxeDWAAASWAG.jpg" alt="Card image" />
                </Card> 
                
                <br/>

                <Element name="banking" className="banking" >
                </Element>
                
                <Row>
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://www.pymnts.com/wp-content/uploads/2020/03/nucleus.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                    <Col>
                    <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Banking</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" onClick={() => history.push('/research/banking')} variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                </Row>

                <Element name="hfin" className="hfin" >
                </Element>

                <Row>
                <Col>
                <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Household Finance</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://c1.wallpaperflare.com/preview/39/84/860/money-home-coin-investment.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                </Row> 

                <Element name="fintech" className="fintech" >
                </Element>

                <Row>
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://bigdataanalyticsnews.com/wp-content/uploads/2019/05/fintech.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                    <Col>
                    <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>FinTech and Innovation</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                </Row>

                <Element name="rfin" className="rfin" >
                </Element>

                <Row>
                <Col>
                <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Responsible Finance</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://www.ca-cib.com/sites/default/files/inline-images/finance-responsable-2_0.png" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                </Row> 

                <Element name="trading" className="trading" >
                </Element>

                <Row>
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://libertex.com/sites/lbxcom/files/664115914.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                    <Col>
                    <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Trading Strategies</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                </Row>

                <Element name="creditrisk" className="creditrisk" >
                </Element>

                <Row>
                <Col>
                <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Credit Risk</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://previews.123rf.com/images/ar130405/ar1304051509/ar130405150900236/44897487-credit-risk-concept-image-with-business-icons-and-copyspace-.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                </Row> 

                <Element name="MLfin" className="MLfin" >
                </Element>

                <Row>
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2019/02/MachineLearning.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                    <Col>
                    <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Machine Learning and Finance</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                </Row>

                <Element name="NLPFin" className="NLPFin" >
                </Element>

                <Row>
                <Col>
                <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Natural Language Processing and Finance</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://cdn.openpr.com/R/9/R91049764_g.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                </Row> 

                <Element name="FI" className="FI" >
                </Element>

                <Row>
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://wealthmd.net/wp-content/uploads/2019/07/fincome.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                    <Col>
                    <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Fixed Income</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                </Row>

                <Element name="covid" className="covid" >
                </Element>

                <Row>
                <Col>
                <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>COVID-19</strong></h2>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Button className = "btnr" href="#" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                        </div>
                    </div>
                    </Col> 
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://www.worldbank.org/content/dam/photos/780x439/2020/apr/Covid-Response2020444.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                </Row> 
            <br/>

            <Button variant = "warning" onClick={this.scrollToTop}>Scroll to Top</Button>{' '}
            <br/>
            <br/>

            </div>
        );
    }
}

export default Research;