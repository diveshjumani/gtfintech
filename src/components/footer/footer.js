import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import logo from '../../images/GeorgiaTechLogo-RGB-Gray.png';

class Footer extends Component{
    render(){
        return (
            <div id="footer">
                
                <Row>
                    <Col xs ={12} lg = {3} >
                    <a href="http://www.gatech.edu/">
                        <img alt="Georgia Tech" width="200" height="60" src={logo} />
                    </a>
                    <h6 id="inst">&copy; Georgia Institute of Technology</h6>
                    </Col>
                    
                    <Col lg = {1}>
                    </Col>
                   
                    <Col lg={2} xs={4} id="links" style = {{margin:'20px'}}> 
                            <Row>   
                                <a target="_blank" rel="noopener noreferrer" href="https://www.gatech.edu/accessibility"><b>Accessibility</b></a>
                            </Row>
                            <Row>   
                                <a target="_blank" rel="noopener noreferrer" href="https://www.gatech.edu/accountability"><b>Accountability</b></a>
                            </Row>
                            <Row >
                                <a target="_blank" rel="noopener noreferrer" href="https://www.gatech.edu/accreditation/"><b>Accreditation</b></a>
                            </Row>
                            <Row>
                                <a target="_blank" rel="noopener noreferrer" href="https://hr.gatech.edu/employment/careers"><b>Employment</b></a>
                            </Row>
                            <Row>  
                                <a target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/contact-us.html"><b>Contact Us</b></a>
                            </Row>
                    </Col>

                    <Col xs={4} lg={2}  id="links" style = {{margin:'20px'}}> 
                            <Row>   
                                <a target="_blank" rel="noopener noreferrer" href="https://directory.gatech.edu/"><b>Directory</b></a>
                            </Row>
                            <Row>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.gatech.edu/emergency/"><b>Emergency Information</b></a>
                            </Row>
                        
                            <Row>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.gatech.edu/privacy"><b>Privacy & Legal Notice</b></a>
                            </Row>
                            <Row>  
                                <a target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/contact-us.html"><b>Contact Us</b></a>
                            </Row>
                           
                    </Col>
                   
                    <Col classname = 'address' lg= {2} xs={12} id="links" style = {{margin:'20px'}}>
                    <Row><b>Georgia Institute of Technology</b></Row>
                    <Row><b>North Avenue, Atlanta, GA 30332</b></Row>
                    <Row><b>404.894.2000</b></Row>
                    </Col>
                </Row>
            </div>     
        );
    }
}

export default Footer;  

// const Footer = () => {
//     return (
//       <MDBFooter color="blue" className="font-small pt-4 mt-4">
//         <MDBContainer fluid className="text-center text-md-left">
//           <MDBRow>
//             <MDBCol md="6">
//               <h5 className="title">Footer Content</h5>
//               <p>
//                 Here you can use rows and columns here to organize your footer
//                 content.
//               </p>
//             </MDBCol>
//             <MDBCol md="6">
//               <h5 className="title">Links</h5>
//               <ul>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 1</a>
//                 </li>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 2</a>
//                 </li>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 3</a>
//                 </li>
//                 <li className="list-unstyled">
//                   <a href="#!">Link 4</a>
//                 </li>
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//         <div className="footer-copyright text-center py-3">
//           <MDBContainer fluid>
//             &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//           </MDBContainer>
//         </div>
//       </MDBFooter>
//     );
//   }
  
//   export default Footer;