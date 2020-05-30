import React, {useState, useEffect } from 'react';
import {Container,Card,CardDeck} from 'react-bootstrap';
import {Navbar, Nav, NavLink, Button} from 'react-bootstrap';
import { Link, Element, animateScroll as scroll} from 'react-scroll'
import logo from '../images/GT_White.png';
import { CSSTransition } from "react-transition-group";
import { FaBars } from 'react-icons/fa';

function People() {
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
        return (
            <div className="people">
                <Navbar className = 'second-navbar fixed-top' collapseOnSelect expand="lg" bg="warning" variant="dark">
                <Navbar.Brand className = "d-inline p-0 text-white" href="/gtfintech/people"><img alt = "" src={logo} width="0" height="35"></img><strong>People</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink className = "d-inline p-2 text-white">
                        <Link activeClass="active" className="director" to="director" spy={true} smooth={true} duration={500} >
                            Director (Sudheer Chava)
                        </Link>
                    </NavLink>
                    <NavLink className = "d-inline p-2 text-white">
                        <Link activeClass="active" className="faculty" to="faculty" spy={true} smooth={true} duration={500} >
                            Faculty
                        </Link>
                    </NavLink>
                    <NavLink className = "d-inline p-2 text-white">
                        <Link activeClass="active" className="phd" to="phd" spy={true} smooth={true} duration={500} >
                            PhD Students
                        </Link>
                    </NavLink>
                    <NavLink className = "d-inline p-2 text-white">
                        <Link activeClass="active" className="ms" to="ms" spy={true} smooth={true} duration={500} >
                            Master Students
                        </Link>
                        </NavLink>
                    <NavLink className = "d-inline p-2 text-white">
                        <Link activeClass="active" className="undergrad" to="undergrad" spy={true} smooth={true} duration={500} >
                            Undergrad Students
                        </Link>
                    </NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                <div >
                <img src="https://www.scheller.gatech.edu/pix/why-scheller/unrestricted-endowment.jpg.pagespeed.ce.9X1ZWk_qnv.jpg" alt="Nature" style={{width:'100%'}}/>
                <div class="text-block">
                    <h4>People</h4>
                    <p align ="justify">The Georgia Tech Financial Services Innovation Lab consists of the Directore (Dr. Sudheer Chava), faculty as well as 
                        students from undergraduate, Masters and PhD </p>
                </div>
                </div>

                <br/> 

                <Container fluid>
                    <Element name="director" className="element" >
                        <Card>
                            <Card.Header className = "bg-warning text-white" as="h3">Director</Card.Header>
                        </Card>
                    </Element>

                    <br/>

                    <div class="row">
                        <div class="col-3">
                            <Card>
                                <Card.Img variant="top" src="https://www.scheller.gatech.edu/thumb/width/600/cropratio/1:1/pix/directory/chava_sudeer_profile.jpg"></Card.Img>
                                <Card.Body>
                                    <Card.Title><strong>Sudheer Chava</strong></Card.Title>
                                    <Card.Text>
                                    <p >Alton M. Costley Chair and Professor of Finance 
                                    <br/>Area Coordinator, Finance
                                    <br/>Director, Quantitative and Computational Finance (QCF) Program
                                    <br/>Director, Financial Services Innovation Lab
                                    <br/>Associate Director, Risk Management, Institute for Information Security and Privacy (IISP)
                                    </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div class="col-9">
                            <row>
                                <p align = "justify"> 
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                Sudheer Chava is Alton M. Costley Chair and Professor of Finance at Scheller College of Business at Georgia Tech.
                                He has received his Ph.D. from Cornell University in 2003. Prior to that he has an MBA degree from Indian Institute of Management – Bangalore 
                                and worked as a fixed income analyst at a leading investment bank in India. 
                                He has held academic positions at University of Houston and Texas A&M University before joining Georgia Tech in 2010.<br/><br/>
                                Dr. Chava has taught a variety of courses at the undergraduate and master’s level including FinTech Ventures, Derivatives, Risk Analytics, Valuation, Cases in Financial Crisis, 
                                Management of Financial Institutions, and Credit Risk Analysis. He has also taught both theoretical and empirical finance courses at the doctoral level. <br/><br/>
                                Dr. Chava’s research interests are in Credit Risk, Banking, FinTech, Empirical Asset Pricing and Corporate Finance. He has published extensively in the top journals in 
                                Finance including Journal of Finance, Journal of Financial Economics, Review of Financial Studies, Management Science, Review of Finance, Journal of Monetary Economics and 
                                Journal of Financial and Quantitative Analysis. His research has won a Ross award for the best paper published in Finance Research Letters in 2008, was a finalist for Brattle 
                                Prize for the best paper published in Journal of Finance in 2008 and was nominated for the Goldman Sachs award for the best paper for published in Review of Finance during 2004. 
                                Dr. Chava is the recipient of multiple external research grants such as FDIC-CFR Fellowship, Morgan Stanley Research grant, Financial Service Exchange Research grant, Q group 
                                research award (2010, 2012) and GARP research award. He has presented his work at numerous finance conferences such as AFA, WFA, EFA, FDIC and Federal Reserve Banks and at many
                                universities in the U.S. and abroad.
                                </p>
                            </row>
                        </div>
                    </div>
                </Container>

                <Container fluid>
                    <Element name="faculty" className="element" >
                        <Card>
                            <Card.Header className = "bg-warning text-white" as="h3">Faculty</Card.Header>
                        </Card>
                    </Element>

                    <br/>

                    <CardDeck>
                        <Card>
                            <a href = "https://sites.google.com/site/alexchiahsu/home">
                                <Card.Img variant="top" src="https://www.scheller.gatech.edu/thumb/width/600/cropratio/1:1/pix/directory/hsu_alex_profile.jpg"></Card.Img>
                            </a>
                            <Card.Body>
                                <Card.Title>Alex Hsu</Card.Title>
                                <Card.Text>Assistant Professor</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Faculty Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Faculty Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Faculty Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>  
                    </CardDeck>

                    <br/>

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Faculty Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Faculty Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card> 

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Faculty Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card> 

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Faculty Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card> 
                    </CardDeck>

                </Container>
            
                <br/>
                
                <Container fluid>
                    <Element name="phd" className="element" >
                        <Card>
                            <Card.Header className = "bg-warning text-white" as="h3">PhD Students</Card.Header>
                        </Card>           
                    </Element>

                    <br/>

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <br/>

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    
                </Container>

                <br/>


                <Container fluid>
                    <Element name="ms" className="element" >
                        <Card>
                            <Card.Header className = "bg-warning text-white" as="h3">Masters Students</Card.Header>
                        </Card>
                    </Element>

                    <br/>

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card> 
                           
                    </CardDeck>

                    <br/>
                    
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>
                            
                    </CardDeck>
                </Container>

                <br/>

                <Container fluid>
                    <Element name="undergrad" className="element" >
                        <Card>
                            <Card.Header className = "bg-warning text-white" as="h3">Undergrad Students</Card.Header>
                        </Card>
                    </Element>

                    <br/>

                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>
                        
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                    </CardDeck>
                    
                    <br/>
                    
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                            <Card.Body>
                                <Card.Title>Student Name</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                    </CardDeck>
                </Container>
         
            </div>
        );
    }

export default People;