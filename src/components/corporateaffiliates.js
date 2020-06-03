import React, {Component} from 'react';
import {Card, Container, CardGroup} from 'react-bootstrap';
import {animateScroll as scroll} from 'react-scroll';
import '../App.css';
import Amazon from '../images/amazon_logo.jpg';
import Bloomberg from '../images/Bloomberg_logo.jpg';
import BOA from '../images/BOA_logo.png';
import CapitalOne from '../images/CapitalOne_logo.png';
import IBM from '../images/IBM_logo.jpg';
import JPM from '../images/JPM_logo.jpg';
import Microsoft from '../images/Microsoft_logo.png';
import Truist from '../images/Truist_logo.jpg';
import Walmart from '../images/Walmart_logo.jpg';
import Workday from '../images/Workday_Logo.png';
import Sponsors from '../images/Sponsors.jpg';


class CorporateAffiliates extends Component{
  scrollToTop() {
    scroll.scrollToTop();
  }       
    render(){
    	return(
            <div>
                <div >
                    <img height = "400px" src={Sponsors} alt="" style={{width:'100%'}}/>
                    <div class="text-block-ca">
                        <br/> <br/> 	
                        <h1 style = {{fontSize: '600%'}} ><strong>Corporate Affiliates </strong></h1>
                    </div>
                </div>

                <br/>
                
                <Container fluid className = "noHover">
                    <CardGroup> 
                            <Card border="light">
                                <Card.Img style = {{height: '30vh'}} variant="top" src={Amazon}></Card.Img> 
                            </Card>

                            <Card border="light">  
                                <Card.Img style = {{height: '30vh'}} variant="top" src={Bloomberg}></Card.Img>  
                            </Card>
                            
                            <Card border="light">
                                <Card.Img style = {{height: '30vh'}} variant="top" src={BOA}></Card.Img>
                            </Card>
                            <Card border="light"> 
                                <Card.Img style = {{height: '30vh'}} variant="top" src={CapitalOne}></Card.Img>
                            </Card> 
                            <Card border="light">  
                                <Card.Img style = {{height: '30vh'}} variant="top" src={IBM}></Card.Img>
                            </Card>         
                    </CardGroup>
                    <CardGroup>
                            <Card border="light">   
                                <Card.Img style = {{height: '30vh'}} variant="top" src={JPM}></Card.Img>    
                            </Card>
                            <Card border="light"> 
                                <Card.Img style = {{height: '30vh'}} variant="top" src={Microsoft}></Card.Img> 
                            </Card>
                            <Card border="light">
                                <Card.Img style = {{height: '30vh'}} variant="top" src={Truist}></Card.Img>   
                            </Card>
                            <Card border="light">
                                <Card.Img style = {{height: '30vh'}} variant="top" src={Walmart}></Card.Img>
                            </Card>
                            <Card border="light">
                                <Card.Img style = {{height: '30vh'}} variant="top" src={Workday}></Card.Img>
                            </Card>
                    </CardGroup>

                </Container>
            
                <br/>

                <Container>
                    <h1 align="left"><b>Affiliates Program</b></h1>

                    <br/>
                    <br/>

                    <h2 align="left"><b>Program Participants</b></h2>
                    <p align = "justify">
                        Member companies in the Lab Affiliates Program share an interest in the research and educational activities 
                        of the Lab. The Affiliates Program is supported by corporate membership fees per year and is designed to 
                        foster a productive relationship between academia and industry. These funds support research and facilitate 
                        the exploration of innovative ideas.
                    </p>

                    <h2 align="left"><b>Member Benefits</b></h2>
                    <p align = "justify">
                        Your membership affords you exclusive engagement
                        As a CAP partner, you, of course, will have a presence at our Career Fair. But these fairs have become pretty crowded. Here’s how you’ll stand out:
                        Raised company awareness: Hold a Corporate Day in the Student Commons to engage with the hundreds of students passing through daily.

                        Focused interest in your opportunities: Host a Corporate Information Session each semester in a reserved room with dinner provided for students and rooms provided for private interviews.

                        Pinpoint your recruitment through student groups: Involve yourself with one or more of 30 student interest groups representing the kinds of extracurricular interests that so often launch careers. Present at group meetings and partner with potential employees. Only CAP partners are offered the opportunity to sponsor student organizations.

                        Get visible through a custom communication plan incorporating digital signage, internal and external posters, College-directed emails, event postings on the College website, job postings, and social media support for CAP-related events.

                        Build on the excitement you have generated by reserving valuable “one on one” time at the Fall and Spring Career Fairs with a dedicated room for your information sessions and interview space.

                        Begin a community of student interest by engaging at a reception for corporate partners at during the fall Career Fair.

                        Elevate your brand with activities and food at your company’s Day in the Student Commons each semester.

                        Go deeper with potential hires with Company Information Sessions (dinner and a room) with interview rooms reserved for you to follow up one on one with a prospect.

                        Build relationships and trust by working with any of our 30+ student groups by financially sponsoring events like hackathons or travel scholarships for students to attend conferences like the Grace Hopper Celebration of Women in Computing or the Richard Tapia Celebration of Diversity in Computing.
                    </p>    
                    <br/>

                    <h1 align="left"><b>Contact Us</b></h1>
                    <br/>
                    <p align="left">
                        For more information, please contact: Sudheer Chava (Director), 
                        <a href = "mailto: Sudheer.Chava@scheller.gatech.edu">Sudheer.Chava@scheller.gatech.edu</a>
                    </p>
                    <br/>
                </Container>  
       </div>
    ); 
    }
}

export default CorporateAffiliates;