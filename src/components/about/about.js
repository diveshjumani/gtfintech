import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from "mdbreact";
import about_1 from '../../images/about_1.jpg';
import about_2 from '../../images/about_2.jpg';
import about_3 from '../../images/about_3.jpg';
import './about.css'

class About extends Component {
    render(){
        return (
            <div className = "about">  
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100 aboutimg" 
                          src = {about_1}
                          alt=""
                        />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <div class="text-block-about">
                          <div className="CL_text_about">
                            
                            <h3 className="h3-responsive"><b>About Us</b></h3>
                            <p align = "justify">Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs.  
                                        </p>
                          </div>
                        </div>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100 aboutimg"
                          src={about_2}
                          alt=""
                        />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <div class="text-block-about">
                        <div className="CL_text_about">
                          
                        <h3 className="h3-responsive"><b>About Our Programs</b></h3>
                        <p align = "justify"> Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs.
                        </p>
                        </div>
                        </div>
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100 aboutimg" 
                          src= {about_3}
                          alt=""
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        <div class="text-block-about">
                        <div className="CL_text_about">
                          
                        <h3 className="h3-responsive"><b>About Our Research</b></h3>
                        <p align = "justify">Georgia Tech’s Financial Services Innovation Lab (fintech.gatech.edu) is located at Scheller College of Business in the heart of the Technology Square Innovation ecosystem. The Lab’s vision is to become a hub for finance education, research and industry in the Southeast. The lab acts as a platform to connect and bring together faculty and students across Georgia Tech with the financial services industry and FinTech entrepreneurs.
                        </p>
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
