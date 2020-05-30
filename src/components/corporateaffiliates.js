import React, {Component, Fragment} from 'react';
import {Card, Image, Button, Container,Navbar,NavLink,Nav,Row,Col, CardDeck} from 'react-bootstrap';
import { Link, Element, animateScroll as scroll} from 'react-scroll';
import '../App.css';


class CorporateAffiliates extends Component{
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }       
    render(){
    	return(
        <Fragment>
          
        <div className = "corpaffiliates">  </div>
                <Navbar className ="second-navbar fixed-top"  variant="warning" bg ="warning" expand = "xl"> 
                 <Navbar.Brand className = "d-inline p-0 text-black" to ="/corpaffiliates"><strong>Corporate Affiliates</strong></Navbar.Brand>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav className="mr-auto">
                            <NavLink className = "d-inline p-2 text-black">
                                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
                                    About
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-black">
                                <Link activeClass="active" to="corppart" spy={true} smooth={true} duration={500} >
                                    Corporate Partners
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-black">
                                <Link activeClass="active" to="becomingpart" spy={true} smooth={true} duration={500} >
                                    Becoming a Partner
                                </Link>
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-black">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
                                    Contact
                                </Link>
                                </NavLink>
                        </Nav>
          </div>
                 </Navbar>
          
          <Container fluid>
    		  <Row>
            <Col>
              <h1 align="center" className="sec-heading"> Corporate Affiliates </h1>
              <br />
            </Col>
          </Row>
      		</Container>
          <br />

          <Fragment>
            <Container fluid>
            <Card className="research bg-dark text-white">
              <Card.Img fluid src="https://pbs.twimg.com/media/Ct8sxeDWAAASWAG.jpg" alt="Card image" />
            </Card> 
            <br />
              
            <Element className = "about"> 
            <Card>
              <Card.Header className = "bg-warning text-black" as="h3">About</Card.Header>
            </Card>
            </Element>
                
            <Row>
              <Col>
                <p style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "right"
        }   }>
            <br />
            <br />
                  
            Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
            <br />
            Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
            <br />
            Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
            <br />
            Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
            <br />
            Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
            <br />
            Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...

                </p>
              </Col>
            </Row>
            
            </Container>
          </Fragment>
          
          <Container fluid>
                    <Element name="corppart" className="corppart" >
                    <Card>
                        <Card.Header className = "bg-warning text-black" as="h3">Corporate Partners</Card.Header>
                    </Card>
                    </Element>
                    <br/>
                    <CardDeck>
                             <Card>
                                <a href = "https://www.coca-cola.com/" >
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                                </a>
                                <Card.Body>
                                    <Card.Title>Partner Name</Card.Title>
                                    <Card.Text>Industry</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <a href = "https://www.coca-cola.com/">
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                                </a>
                                <Card.Body>
                                    <Card.Title>Partner Name</Card.Title>
                                    <Card.Text>Industry</Card.Text>
                                </Card.Body>
                            </Card>
                            
                            <Card>
                                <a href = "https://www.coca-cola.com/">
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                                </a>
                                <Card.Body>
                                    <Card.Title>Partner Name</Card.Title>
                                    <Card.Text>Industry</Card.Text>
                                </Card.Body>
                            </Card>

                            
                    </CardDeck>
                    <br/>
                    <CardDeck>
                    <Card>
                                <a href = "https://www.coca-cola.com/">
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                                </a>
                                <Card.Body>
                                    <Card.Title>Partner Name</Card.Title>
                                    <Card.Text>Industry</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <a href = "https://www.coca-cola.com/">
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                                </a>
                                <Card.Body>
                                    <Card.Title>Partner Name</Card.Title>
                                    <Card.Text>Industry</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <a href = "https://www.coca-cola.com/">
                                <Card.Img variant="top" src="https://career.gatech.edu/sites/default/files/uploads/images/superblock_images/career_buzz_logo.png"></Card.Img>
                                </a>
                                <Card.Body>
                                    <Card.Title>Partner Name</Card.Title>
                                    <Card.Text>Industry</Card.Text>
                                </Card.Body>
                            </Card>
                            
                    </CardDeck>

                </Container>
            
            <br/>
            <Container fluid>
       
       <Element className = "becomingpart"> 
       <Card>
                   <Card.Header className = "bg-warning text-black" as="h3">Becoming a Partner...</Card.Header>
               </Card>
               </Element>
  
           
           <Row>
           <Col>
               <p style={{
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "right"
   }   }>
     <br />
 
             
               1. Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
               <br />
               2. Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
               <br />
               3. Georgia Tech FinTech Lab's Corporate Affiliates programs is blah blah blah.... Benefits include blah blah blah ...
               <br />
  
               </p>
           </Col>
           </Row>
       
       </Container>

       <Container fluid>
       
       <Element className = "contact"> 
       <Card>
                   <Card.Header className = "bg-warning text-black" as="h3">Contact Us...</Card.Header>
               </Card>
               </Element>
  
           
           <Row>
           <Col>
               <p style={{
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "right"
   }   }>
     <br />
  
             
               To get in touch, please contact "blah blah" email or call us at "some number".
  
               </p>
           </Col>
           </Row>
       
       </Container>


       <Button variant = "warning" onClick={this.scrollToTop}>Scroll to Top</Button>{' '}
       <br />
       <br />
       
       </Fragment>
     
    );
      
    }
}

export default CorporateAffiliates;