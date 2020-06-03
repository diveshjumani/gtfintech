import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from "mdbreact";

class About extends Component {
    render(){
        return (
            <div className = "about"> 
              
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        
                        <img
                          className="d-block w-100" height = "768px"
                          src = "https://3k7by215ywuf340yi3alsfso-wpengine.netdna-ssl.com/wp-content/uploads/sites/5/2015/11/Scheller_TechSquare_Hero_02_tech-square-activity-1.jpg"
                          alt=""
                        />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                      <div class="text-block-about">
                      <div className="CL_text_about">
                        <h3 className="h3-responsive"><b>About Us</b></h3>
                        <p align = "justify">Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. 
                                    The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. 
                                    The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs. 
                                    Through an ecosystem of affiliates, faculty, student, and practitioner interaction, the lab creates original research and insights that are relevant for financial markets and institutions by focusing on the technology and innovation disrupting the financial services industry. 
                                    The lab facilitates experiential learning projects to positively influence student learning experiences. 
                                    The lab also organizes events to inform research, classroom learning, entrepreneurship and corporate best practices.</p>
                        </div>
                        </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100" height = "768px"
                          src="https://www.scheller.gatech.edu/pix/hdr-tech-square.jpg.pagespeed.ce.5vofNEnHkj.jpg"
                          alt=""
                        />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <div class="text-block-about">
                        <div className="CL_text_about">
                        <h3 className="h3-responsive"><b>About Our Programs</b></h3>
                        <p align = "justify"> Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. 
                                    The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. 
                                    The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs. 
                                    Through an ecosystem of affiliates, faculty, student, and practitioner interaction, the lab creates original research and insights that are relevant for financial markets and institutions by focusing on the technology and innovation disrupting the financial services industry. 
                                    The lab facilitates experiential learning projects to positively influence student learning experiences. 
                                    The lab also organizes events to inform research, classroom learning, entrepreneurship and corporate best practices.
                        </p>
                        </div>
                        </div>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100" height = "768px"
                          src= 'https://helpingstories.gatech.edu/sites/default/files/2020-04/workingg.jpg'
                          alt=""
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <div class="text-block-about">
                        <div className="CL_text_about">
                        <h3 className="h3-responsive"><b>About Our Research</b></h3>
                        <p align = "justify">Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. 
                                    The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. 
                                    The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs. 
                                    Through an ecosystem of affiliates, faculty, student, and practitioner interaction, the lab creates original research and insights that are relevant for financial markets and institutions by focusing on the technology and innovation disrupting the financial services industry. 
                                    The lab facilitates experiential learning projects to positively influence student learning experiences. 
                                    The lab also organizes events to inform research, classroom learning, entrepreneurship and corporate best practices. </p>
                        </div>
                        </div>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              
            </div>         
        );
    }
}

export default About;