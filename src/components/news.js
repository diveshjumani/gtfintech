import React, {Component} from 'react';
import {Card, CardGroup, Image, Button, Container,Navbar,NavLink,Nav,Row,Col} from 'react-bootstrap';
import Calendar from './Calendar';


class News extends Component{
    render(){
    	return(
    		<div className = "news">
          <br/>
          <br/>
          <div>
          <CardGroup>
              <Card className="bg-dark text-white" >
                    <Image  style = {{height: '40vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/clorox.jpg" alt="Card image" />
                    <div class="text-block-card">
                    <h5 align = "justify">‘Do the Right Thing’: Clorox VP and Scheller Alum Rick McDonald on the Fight Against COVID-19</h5>
                    <Button className = "btnr" variant="warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/do-the-right-thing-clorox-vp-and-scheller-alum-rick-mcdonald-on-the-fight-against-covid-19.html">
                        Read more
                      </Button>{' '}
                </div>
                </Card>    
            
              <Card className="bg-dark text-white">
                    <Image  style = {{height: '40vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/scheller-building-front-facing-v2.jpg" alt="Card image" />
                    <div class="text-block-card">
                    <h5 align = "justify">Four Scheller College of Business Faculty Receive Award for Excellence in Teaching</h5><br/>
                    <Button className = "btnr" variant="warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/four-scheller-college-of-business-faculty-receive-award-for-excellence-in-teaching.html">
                        Read more
                      </Button>{' '}
                </div>
                </Card>    
                <Card className="bg-dark text-white">
                    <Image  style = {{height: '40vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/Nona-Black-768x480.jpeg" alt="Card image" />
                    <div class="text-block-card">
                    <h5 align = "justify">Passion, Drive, and a Commitment to Diversity and Inclusion: Meet Nona Black, Poet’s & Quants 2020 MBA to Watch</h5>
                    <Button className = "btnr" variant="warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/passion-drive-and-a-commitment-to-diversity-and-inclusion-meet-nona-black-poets-and-quants-2020-mba-to-watch.html">
                        Read more
                      </Button>{' '}
                </div>
                </Card>  
              
            </CardGroup>
            <CardGroup>
           
           <Card className="bg-dark text-white">
                 <Image  style = {{height: '40vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/emba-jon-michael-thomas-2.jpg" alt="Card image" />
                 <div class="text-block-card">
                    <h5 align = "justify">The Role of an EMBA During a Merger, Career Shift, and COVID-19: Perspectives from Alum Jon Michael Thomas</h5>
                    <Button className = "btnr" variant="warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/the-role-of-an-emba-during-a-merger-career-shift-and-covid-19-perspectives-from-alum-jon-michael-thomas.html">
                        Read more
                      </Button>{' '}
                </div>
             </Card>    
         
           <Card className="bg-dark text-white">
                 <Image  style = {{height: '40vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/alex-hsu-faculty.JPG" alt="Card image" />
                < div class="text-block-card">
                    <h5 align = "justify">How are Equity Valuations Affected by the COVID-19 Crisis</h5><br/>
                    <Button className = "btnr" variant="warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/how-are-equity-valuations-affected-by-the-covid-19-crisis.html">
                        Read more
                      </Button>{' '}
                </div>
             </Card> 
             <Card className="bg-dark text-white">
                    <Image  style = {{height: '40vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/green_chris_profile.jpg" alt="Card image" />
                    <div class="text-block-card">
                    <h5 align = "justify">Scheller Doctoral Student Chris Green Promoted to Lieutenant Colonel</h5><br/>
                    <Button className = "btnr" variant="warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/scheller-doctoral-student-chris-green-promoted-to-lieutenant-colonel.html">
                        Read more
                      </Button>{' '}
                </div>
                </Card>         
         </CardGroup>
         </div>

          <br/>

          <Row>
          <div className = "col-8">
            <Container>
              <Card>
                <Card.Header> 
                  <h6> Creative Destruction Lab Kicks Off Global Program to Address Global Crisis - May 29,2020</h6>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image style={{width: '400px', height: '250px'}}  src="https://www.scheller.gatech.edu/news-events/latest-news/2020/cdl-logo1.JPG" alt="" />          
                    </Col>
                    <Col>
                      <p align = "justify">
                        The Creative Destruction Lab (CDL) kicked off its new recovery program yesterday which was
                        conceived, designed, built and launched in eight weeks to accelerate the world's recovery from
                        COVID-19 through information based solutions.
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/creative-destruction-lab-kicks-off-global-program-to-address-global-crisis.html">
                        Read more
                      </Button>{' '}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <br/>

              <Card>
                <Card.Header> 
                  <h6> Passion, Drive, and a Commitment to Diversity and Inclusion: Meet Nona Black, Poet’s & Quants 2020 MBA to Watch - May 28,2020</h6>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col> 
                      <Image style={{width: '400px', height: '250px'}}  src="https://www.scheller.gatech.edu/news-events/latest-news/2020/Nona-Black-768x480.jpeg" alt="" />          
                    </Col>
                    <Col>
                      <p align = "justify">
                      Nona Black (MBA 2020), a design-minded innovator whose dream is to spoil all the dogs in the world, worked right down the street from the Scheller College of Business for a year and a half before applying to the Full-time MBA program.
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/passion-drive-and-a-commitment-to-diversity-and-inclusion-meet-nona-black-poets-and-quants-2020-mba-to-watch.html">
                        Read more
                      </Button>{' '}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <br/>

              <Card>
                <Card.Header> 
                  <h6> Scheller Doctoral Student Chris Green Promoted to Lieutenant Colonel - May 21,2020</h6>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image style={{width: '400px', height: '250px'}} src="https://www.scheller.gatech.edu/news-events/latest-news/2020/green_chris_profile.jpg" alt="" />          
                    </Col>
                    <Col>
                      <p align = "justify">
                      Scheller College of Business doctoral student Chris Green recently received a promotion from Major to Lieutenant Colonel in the United States Army. The ceremony took place at Scheller College in front of faculty, staff, students and family members - a first for the College. 
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/scheller-doctoral-student-chris-green-promoted-to-lieutenant-colonel.html">
                        Read more
                      </Button>{' '}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <br/>

              <Card>
                <Card.Header> 
                  <h6> International travelers, tech gamechangers, and a Yellow Jackets quarterback: Meet the Scheller Executive MBA Class of 2021 - May 20,2020</h6>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <img style={{width: '400px', height: '250px'}} src="https://www.scheller.gatech.edu/news-events/latest-news/2020/emba-new-student-profiles-picture1.jpg" alt="" />          
                    </Col>
                    <Col>
                      <p align = "justify">
                      Who exactly is an Executive MBA? Meet four of the Georgia Tech Executive MBA (EMBA) program’s incoming students, whose expertise spans the globe in a vast variety of industries and backgrounds. These four students will be starting their transformational 17-month EMBA experience at the Scheller College of Business this August.  
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/international-travelers-tech-gamechangers-and-a-yellow-jackets-quarterback-meet-the-scheller-executive-mba-class-of-2021.html">
                        Read more
                      </Button>{' '}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </div>

          <div className = "col-1"></div>

          <div className = "col-3">
          <Card bg ='warning' text = "black">
          <Card.Link href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
            <Card.Body>
              <Card.Title>03 June</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
              <Card.Text as="h5">
                <strong>
                Executive MBA Webinar Info Session
                </strong>
              </Card.Text>
              <Card.Text>
                Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
              </Card.Text>
            </Card.Body>
            </Card.Link>
          </Card>

          <br/>

          <Card bg ='warning' text = "black">
          <Card.Link href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
            <Card.Body>
              <Card.Title>03 June</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
              <Card.Text as="h5">
                <strong>
                Executive MBA Webinar Info Session
                </strong>
              </Card.Text>
              <Card.Text>
                Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
              </Card.Text>
            </Card.Body>
            </Card.Link>
          </Card>

          <br/>

          <Card bg ='warning' text = "black">
          <Card.Link href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
            <Card.Body>
              <Card.Title>03 June</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
              <Card.Text as="h5">
                <strong>
                Executive MBA Webinar Info Session
                </strong>
              </Card.Text>
              <Card.Text>
                Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
              </Card.Text>
            </Card.Body>
            </Card.Link>
          </Card>

          <br/>

          <Card bg ='warning' text = "black">
          <Card.Link href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
            <Card.Body>
              <Card.Title>03 June</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
              <Card.Text as="h5">
                <strong>
                Executive MBA Webinar Info Session
                </strong>
              </Card.Text>
              <Card.Text>
                Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
              </Card.Text>
            </Card.Body>
            </Card.Link>
          </Card>

          <br/>

          <Card bg ='warning' text = "black">
          <Card.Link href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
            <Card.Body>
              <Card.Title>03 June</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
              <Card.Text as="h5">
                <strong>
                Executive MBA Webinar Info Session
                </strong>
              </Card.Text>
              <Card.Text>
                Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
              </Card.Text>
            </Card.Body>
            </Card.Link>
          </Card>

          </div>
          </Row>
          
          <br/>  
          <br/>

        </div>
      		);
    }
}

export default News;