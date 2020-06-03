import React, {useState, useEffect } from 'react';
import {Container,Card,CardDeck} from 'react-bootstrap';
import {Navbar, Nav, NavLink, Button} from 'react-bootstrap';
import { Link, Element, animateScroll as scroll} from 'react-scroll'
import logo from '../images/GT_White.png';
import Sudheer_Chava from '../images/Sudheer_Chava.jpg';
import Alex_Hsu from '../images/Alex_Hsu.jpg';
import Daniel_Weagley from '../images/Daniel_Weagley.jpg';
import Shijie_Deng from '../images/Shijie_Deng.jpg';
import Soohun_Kim from '../images/Soohun_Kim.jpg';
import David_Goldsman from '../images/David_Goldsman.jpg';
import Baridhi_Malakar from '../images/Baridhi_Malakar.jpg';
import Wendi_Du from '../images/Wendi_Du.jpg';
import Ernest_Jang from '../images/Ernest_Jang.jpg';
import Nikhil_Paradkar from '../images/Nikhil_Paradkar.jpg';
import Peter_Simasek from '../images/Peter_Simasek.jpg';
import Mingxun_Wang from '../images/Mingxun_Wang.jpg';

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

    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
  
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
                <Navbar className = 'second-navbar fixed-top CL_height_navbar' collapseOnSelect expand="lg" bg="warning" variant="dark">
                    <Navbar.Brand className = "d-inline p-0 text-white" className="CL_people_header_people text-white" target="_blank" href="/gtfintech/people"><img alt = "" src={logo} width="0" height="35"></img><strong>People</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink className = "d-inline p-2 text-white" className="CL_people_header_texts text-white">
                            <Link activeClass="active" className="director" to="director" offset ={-100} spy={true} smooth={true} duration={500} >
                                <strong>Director</strong>
                            </Link>
                        </NavLink>
                        <NavLink className = "d-inline p-2 text-white" className="CL_people_header_texts text-white">
                            <Link activeClass="active" className="faculty" to="faculty" offset ={-100} spy={true} smooth={true} duration={500} >
                                <strong>Faculty</strong>
                            </Link>
                        </NavLink>
                        <NavLink className = "d-inline p-2 text-white" className="CL_people_header_texts text-white">
                            <Link activeClass="active" className="phd" to="phd" offset ={-100} spy={true} smooth={true} duration={500} >
                                <strong>PhD Students</strong>
                            </Link>
                        </NavLink>
                        <NavLink className = "d-inline p-2 text-white" className="CL_people_header_texts text-white">
                            <Link activeClass="active" className="ms" to="ms" offset ={-100} spy={true} smooth={true} duration={500} >
                                <strong>Master Students</strong>
                            </Link>
                            </NavLink>
                        <NavLink className = "d-inline p-2 text-white" className="CL_people_header_texts text-white">
                            <Link activeClass="active" className="undergrad" offset ={-100} to="undergrad" spy={true} smooth={true} duration={500} >
                                <strong>Undergrad Students</strong>
                            </Link>
                        </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div >
                <div class="CL_img-container">
                    <img class="CL_img" src="https://www.scheller.gatech.edu/pix/why-scheller/unrestricted-endowment.jpg.pagespeed.ce.9X1ZWk_qnv.jpg" alt="Nature" style={{width:'100%'}} />
                </div>
                    <div class="text-block">
                        <br/> <br/> 
                        <h4><b>People</b></h4>
                        <p align ="center">The Georgia Tech Financial Services Innovation Lab consists of the Director (Dr. Sudheer Chava), Faculty as well as 
                            students from undergraduate, Masters and PhD </p>
                    </div>
                </div>

                <br/> 

                <Container fluid>
                    <Element name="director" className="element" >
                        <Card border="light" className = "noHover">
                            <Card.Header as="h3"><b>Director</b></Card.Header>
                        </Card>
                    </Element>

                    <br/>

                    <div class="row">
                        <div class="col-3">
                            <Card>
                                <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">
                                <Card.Img style = {{height:'21vw'}} variant="top" src={Sudheer_Chava}></Card.Img>
                                </a>
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

                            <br/>
                            <br/>

                            <row>
                                <Button target="_blank" href = "https://scholar.google.com/citations?user=AXYf-i8AAAAJ" variant="warning">Google Scholar</Button>{' '}
                                <Button target="_blank" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=292365" variant="warning">SSRN</Button>{' '}
                                <Button target="_blank" href = "https://www.linkedin.com/in/sudheer-chava-b5883021/" variant="warning">LinkedIn</Button>{' '}
                                <Button target="_blank" href = "http://www.prism.gatech.edu/~schava6/Chava_CV_Web.pdf"  variant="warning">CV</Button>{' '}
                            </row>
                        </div>
                    </div>
                </Container>

                <br/>

                <Container fluid>
                    <Element name="faculty" className="element" >
                         <Card border="light" className = "noHover">
                            <Card.Header as="h3"><b>Faculty</b></Card.Header>
                        </Card>
                    </Element>

                    <br/>

                    <CardDeck>
                        <Card  className = 'card-img-faculty'>
                            <a target="_blank" href = "https://sites.google.com/site/alexchiahsu/home">
                                <Card.Img style = {{height:'20vw'}} variant="top" src={Alex_Hsu}></Card.Img>
                            </a>
                            <Card.Body>
                                <Card.Title>Alex Hsu</Card.Title>
                                <Card.Text>Assistant Professor</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card  className = 'card-img-faculty'>
                            <a target="_blank" href ="https://www.scheller.gatech.edu/directory/faculty/kim.s/index.html">
                                <Card.Img style = {{height:'20vw'}} variant="top" src={Soohun_Kim}></Card.Img>
                            </a>
                            <Card.Body>
                                <Card.Title>Soohun Kim</Card.Title>
                                <Card.Text>Assistant Professor</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card  className = 'card-img-faculty'>
                            <a target="_blank" href = "https://www.danielweagley.com/">
                                <Card.Img style = {{height:'20vw'}} variant="top" src={Daniel_Weagley}></Card.Img>
                            </a>
                            <Card.Body>
                                <Card.Title>Daniel Weagley</Card.Title>
                                <Card.Text>Assistant Professor</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card  className = 'card-img-faculty'>
                            <a target="_blank" href = "https://www2.isye.gatech.edu/people/faculty/Shijie_Deng/">
                                <Card.Img style = {{height:'20vw'}} variant="top" src={Shijie_Deng}></Card.Img>
                            </a>
                            <Card.Body>
                                <Card.Title>Shijie Deng</Card.Title>
                                <Card.Text>Associate Professor</Card.Text>
                            </Card.Body>
                        </Card>  

                        <Card>
                            <a target="_blank" href = "https://www2.isye.gatech.edu/people/faculty/David_Goldsman/">
                                <Card.Img style={{height:'20vw'}} variant="top" src={David_Goldsman}></Card.Img>
                            </a>
                            <Card.Body>
                                <Card.Title>David Goldsman</Card.Title>
                                <Card.Text>Specialisation</Card.Text>
                            </Card.Body>
                        </Card>

                    </CardDeck>

                    <br/>

                </Container>
            
                
                <Container fluid>
                    <Element name="phd" className="element" >
                         <Card border="light" className = "noHover">
                            <Card.Header as="h3"><b>PhD Students</b></Card.Header>
                        </Card>         
                    </Element>

                    <br/>

                    <CardDeck>
                        <Card>
                            <Card.Img style={{height:'15vw'}} variant="top" src={Wendi_Du}></Card.Img>
                            <Card.Body>
                                <Card.Title>Wendi Du</Card.Title>
                                <Card.Text>Finance</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img style={{height:'15vw'}} variant="top" src={Ernest_Jang}></Card.Img>
                            <Card.Body>
                                <Card.Title>Ernest Jang</Card.Title>
                                <Card.Text>Finance</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img style={{height:'15vw'}} variant="top" src={Baridhi_Malakar}></Card.Img>
                            <Card.Body>
                                <Card.Title>Baridhi Malakar</Card.Title>
                                <Card.Text>Finance</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <a target="_blank" href= "https://www.nikhil-paradkar.com/home">
                            <Card.Img style={{height:'15vw'}} variant="top" src={Nikhil_Paradkar}></Card.Img>
                            </a>
                            <Card.Body>
                                <Card.Title>Nikhil Paradkar</Card.Title>
                                <Card.Text>Finance</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img style={{height:'15vw'}} variant="top" src={Peter_Simasek}></Card.Img>
                            <Card.Body>
                                <Card.Title>Peter Simasek</Card.Title>
                                <Card.Text>Finance</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img style={{height:'15vw'}} variant="top" src={Mingxun_Wang}></Card.Img>
                            <Card.Body>
                                <Card.Title>Mingxun Wang</Card.Title>
                                <Card.Text>Finance</Card.Text>
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
                         <Card border="light" className = "noHover">
                            <Card.Header as="h3"><b>MS Students</b></Card.Header>
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
                         <Card border="light" className = "noHover">
                            <Card.Header as="h3"><b>Undergrad Students</b></Card.Header>
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
                <br/>
         
            </div>
        );
    }

export default People;