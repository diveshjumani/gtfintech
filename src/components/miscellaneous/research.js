import React, {useState, useEffect } from 'react';
import {Card, Button, Container,Row,Col} from 'react-bootstrap';
import {Element, animateScroll as scroll} from 'react-scroll'
import '../../App.css';
import {Link as Link1} from 'react-router-dom';

function Research() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  
    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
  
    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };
        return(
            <div className = "research">
                <Element name="covid" className="covid" >
                </Element>
                <br/>
                <br/>
                <br/>
                <Container fluid>
                <Row>
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://www.worldbank.org/content/dam/photos/780x439/2020/apr/Covid-Response2020444.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                    <Col>
                    <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>COVID-19</strong></h2>
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/covid'>
                                <Button className = "btnr" variant="warning" size="lg">
                                    <div style = {{color:'white'}}>
                                    View Research
                                    </div>
                                </Button>{' '}
                            </Link1>
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
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/householdfinance'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
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
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/fintech'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
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
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/responsiblefinance'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
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
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/trading'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
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
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/creditrisk'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
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
                            <h2><strong>Machine Learning</strong></h2>
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/MLandFinance'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
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
                            <h2><strong>Natural Language Processing</strong></h2>
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/NLPandFinance'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
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
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/fixedincome'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
                        </div>
                    </div>
                    </Col> 
                </Row>

                <Element name="banking" className="banking" >
                </Element>

                <Row>
                <Col>
                <div class="wrapper">
                        <div class="centerthis">
                            <h2><strong>Banking</strong></h2>
                            <p align = "justify"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
                            </p>
                            <Link1 to='/gtfintech/research/banking'>
                            <Button className = "btnr" variant="warning" size="lg">
                                <div style = {{color:'white'}}>
                                View Research
                                </div>
                            </Button>{' '}
                            </Link1>
                        </div>
                    </div>
                    </Col> 
                    <Col>
                        <div class="wrapperimage">
                        <Card className="bg-dark text-white">
                            <Card.Img fluid height = "100%" src="https://www.pymnts.com/wp-content/uploads/2020/03/nucleus.jpg" alt="Card image" />
                        </Card>
                        </div>
                    </Col>  
                </Row> 
                </Container>
                <br/>
            </div>
        );
    }

export default Research;