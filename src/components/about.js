import React, {Component, Fragment} from 'react';
import {Jumbotron, Card, Image, Button, Container,Navbar,NavLink,Nav,Row,Col, CardDeck} from 'react-bootstrap';
import { Link, Element, animateScroll as scroll} from 'react-scroll';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import Slides from './slides';
import Carousel from 'react-bootstrap/Carousel';

import BackgroundSlideshow from 'react-background-slideshow'
import BackgroundSlider from 'react-background-slider'



import image1 from '/Users/kevincho/Desktop/FinTech Website/gtfintech/src/images/creating-the-next-wordmark-stacked-blk.png'
import image2 from '/Users/kevincho/Desktop/FinTech Website/gtfintech/src/images/GeorgiaTechLogo-white.png'
import image3 from '/Users/kevincho/Desktop/FinTech Website/gtfintech/src/images/GTlogo2.png'


class About extends Component {

   
      

    render(){
        return (
            <Jumbotron className = "about">

            <Navbar className ="second-navbar fixed-top"  variant="warning" bg ="warning" expand = "xl"> 
                 <Navbar.Brand className = "d-inline p-0 text-black" to ="/corpaffiliates"><strong>About</strong></Navbar.Brand>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav className="mr-auto">
                            <NavLink className = "d-inline p-2 text-black">
                                {/* <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
                                    About
                                </Link> */}
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-black">
                                <Link activeClass="active" to="corppart" spy={true} smooth={true} duration={500} >
                                    <strong>
                                    GT FinTech
                                    </strong>
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-black">
                                <Link activeClass="active" to="becomingpart" spy={true} smooth={true} duration={500} >
                                    <strong>
                                    Projects
                                    </strong>
                            
                                   
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-black">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
                                <strong>
                                    Programs
                                    </strong>
                        
                                </Link>
                                </NavLink>
                        </Nav>
                    </div>
            </Navbar>




            <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src = "https://www.scheller.gatech.edu/degree-programs/undergraduate/files/xtech_square_sign.jpg.pagespeed.ic.-9xhUiSo1e.jpg"
              alt="About FinTech"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"><b>About Us</b></h3>
            <p>Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. 
                        The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. 
                        The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs. 
                        Through an ecosystem of affiliates, faculty, student, and practitioner interaction, the lab creates original research and insights that are relevant for financial markets and institutions by focusing on the technology and innovation disrupting the financial services industry. 
                        The lab facilitates experiential learning projects to positively influence student learning experiences. 
                        The lab also organizes events to inform research, classroom learning, entrepreneurship and corporate best practices.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://3k7by215ywuf340yi3alsfso-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/2015/11/Scheller_TechSquare_Hero_02_tech-square-activity-1.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"><b>About Our Programs</b></h3>
            <p>Our programs include enter text here are blah blah blah blah blah,. We can chooseto not put a caption on the last 2 slides but we can discuss that 
              later 
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src= 'https://helpingstories.gatech.edu/sites/default/files/2020-04/workingg.jpg'
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"><b>About Our Projects</b></h3>
            <p>Our current projects are nladfkdmskl are blah blah blah blah blah,. We can chooseto not put a caption on the last 2 slides but we can discuss that 
              later </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>

            <React.Fragment>

        
            <Container fluid >
                    {/* <Col>
                        <Slides />
                    </Col> */}

                    {/* <Row>
                        <p align = "justify">
                        <h1>About</h1>
                        </p>
                    </Row> */}


                    <Col>
                        {/* <p align = "justify">
                        <h1><strong>About GT FinTech</strong></h1>
                        </p> */}

                        {/* <p align = "justify">
                        Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. 
                        The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. 
                        The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs. 
                        Through an ecosystem of affiliates, faculty, student, and practitioner interaction, the lab creates original research and insights that are relevant for financial markets and institutions by focusing on the technology and innovation disrupting the financial services industry. 
                        The lab facilitates experiential learning projects to positively influence student learning experiences. 
                        The lab also organizes events to inform research, classroom learning, entrepreneurship and corporate best practices.
                        </p> */}
                    </Col>
          
            </Container>
                    </React.Fragment>
            </Jumbotron>         
        );
    }
}

export default About;