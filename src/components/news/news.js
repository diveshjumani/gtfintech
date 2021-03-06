import React, {Component} from 'react';
import {Card, Image, Button, Container,Nav,Row,Col} from 'react-bootstrap';
import './news.css'

class News extends Component{
    render(){
    	return(
    		<div className = "news">  
          <br/>
          <br/>
          <div className="row no-gutters">
            <Col xs={12} md = {12} lg = {6} xl = {6}>
              <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/do-the-right-thing-clorox-vp-and-scheller-alum-rick-mcdonald-on-the-fight-against-covid-19.html">
                <Card  className="bg-dark text-white noHover" >
                  <Image style = {{width: '100%', height: '70.3vh'}} className="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/clorox.jpg" alt="Card image" />
                  <div class="text-block-card text-block-big-card">
                    <h6 align = "justify">‘Do the Right Thing’: Clorox VP and Scheller Alum Rick McDonald on the Fight Against COVID-19</h6><br/>
                  </div>
                </Card>  
              </a>  
            </Col>

            <Col xs={12} md = {12} lg = {6}>
              <Row className="no-gutters">
                <Col xs={6} md = {6} lg = {6} xl = {6}>
                  <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/the-role-of-an-emba-during-a-merger-career-shift-and-covid-19-perspectives-from-alum-jon-michael-thomas.html">
                    <Card className="bg-dark text-white noHover">
                      <Image style = {{width: '100%', height: '35vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/emba-jon-michael-thomas-2.jpg" alt="Card image" />
                      <div class="text-block-card">
                        <h6 align = "justify">The Role of an EMBA During a Merger, Career Shift, and COVID-19: Perspectives from Alum Jon Michael Thomas</h6>
                      </div>
                    </Card>    
                  </a>
                </Col>
                <Col xs={6} md = {6} lg = {6} xl = {6}>
                  <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/how-are-equity-valuations-affected-by-the-covid-19-crisis.html">
                    <Card className="bg-dark text-white noHover">
                      <Image style = {{width: '100%', height: '35vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/alex-hsu-faculty.JPG" alt="Card image" />
                      <div class="text-block-card">
                        <h6 align = "justify">How are Equity Valuations Affected by the COVID-19 Crisis</h6><br/><br/>
                      </div>
                    </Card> 
                  </a>
                </Col>

                <Col xs={6} md = {6} lg = {6} xl = {6}>
                  <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/four-scheller-college-of-business-faculty-receive-award-for-excellence-in-teaching.html">
                    <Card className="bg-dark text-white noHover">
                      <Image style = {{width: '100%', height: '35vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/scheller-building-front-facing-v2.jpg" alt="Card image" />
                      <div class="text-block-card">
                        <h6 align = "justify">Four Scheller College of Business Faculty Receive Award for Excellence in Teaching</h6><br/>
                      </div>
                    </Card>  
                  </a>
                </Col>
                <Col xs={6} md = {6} lg = {6} xl = {6}>
                  <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/passion-drive-and-a-commitment-to-diversity-and-inclusion-meet-nona-black-poets-and-quants-2020-mba-to-watch.html">
                    <Card className="bg-dark text-white noHover">
                      <Image style = {{width: '100%', height: '35vh'}} class="card-img-top" fluid src="https://www.scheller.gatech.edu/news-events/latest-news/2020/Nona-Black-768x480.jpeg" alt="Card image" />
                      <div class="text-block-card">
                        <h6 align = "justify">Passion, Drive, and a Commitment to Diversity and Inclusion: Meet Nona Black, Poet’s & Quants 2020 MBA to Watch</h6>
                      </div>
                    </Card>  
                  </a>
                </Col>
              </Row>
            </Col>
          </div>

          <br/>

          <Container fluid>
          <Row>
            <Col xs={12} md = {12} lg = {3}>
              <Card>
                <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="#first">2020</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">2019</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">2018</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">Archives</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
              </Card>
            </Col>
          </Row>
          </Container>

          <br/>

          <Row>
          <Col xs={12} md = {12} lg = {9}>
            <Container>
              <Card>
                <Card.Header> 
                  <h6> Creative Destruction Lab Kicks Off Global Program to Address Global Crisis - May 29,2020</h6>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={12} md = {12} lg = {6}>
                      <Image style={{width: '100%', height: '30vh'}}  src="https://www.scheller.gatech.edu/news-events/latest-news/2020/cdl-logo1.JPG" alt="" />          
                    </Col>
                    <Col xs={12} md = {12} lg = {6}>
                      <p align = "justify">
                        The Creative Destruction Lab (CDL) kicked off its new recovery program yesterday which was
                        conceived, designed, built and launched in eight weeks to accelerate the world's recovery from
                        COVID-19 through information based solutions.
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/creative-destruction-lab-kicks-off-global-program-to-address-global-crisis.html">
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
                    <Col xs={12} md = {12} lg = {6}> 
                      <Image style={{width: '100%', height: '30vh'}}  src="https://www.scheller.gatech.edu/news-events/latest-news/2020/Nona-Black-768x480.jpeg" alt="" />          
                    </Col>
                    <Col xs={12} md = {12} lg = {6}>
                      <p align = "justify">
                      Nona Black (MBA 2020), a design-minded innovator whose dream is to spoil all the dogs in the world, worked right down the street from the Scheller College of Business for a year and a half before applying to the Full-time MBA program.
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/passion-drive-and-a-commitment-to-diversity-and-inclusion-meet-nona-black-poets-and-quants-2020-mba-to-watch.html">
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
                    <Col xs={12} md = {12} lg = {6}>
                      <Image style={{width: '100%', height: '30vh'}} src="https://www.scheller.gatech.edu/news-events/latest-news/2020/green_chris_profile.jpg" alt="" />          
                    </Col>
                    <Col xs={12} md = {12} lg = {6}>
                      <p align = "justify">
                      Scheller College of Business doctoral student Chris Green recently received a promotion from Major to Lieutenant Colonel in the United States Army. The ceremony took place at Scheller College in front of faculty, staff, students and family members - a first for the College. 
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/scheller-doctoral-student-chris-green-promoted-to-lieutenant-colonel.html">
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
                <Card.Body >
                  <Row>
                    <Col xs={12} md = {12} lg = {6}>
                      <img style={{width: '100%', height: '30vh'}} src="https://www.scheller.gatech.edu/news-events/latest-news/2020/emba-new-student-profiles-picture1.jpg" alt="" />          
                    </Col>
                    <Col xs={12} md = {12} lg = {6}>
                      <p align = "justify">
                      Who exactly is an Executive MBA? Meet four of the Georgia Tech Executive MBA (EMBA) program’s incoming students, whose expertise spans the globe in a vast variety of industries and backgrounds. These four students will be starting their transformational 17-month EMBA experience at the Scheller College of Business this August.  
                      </p>
                      <Button className = "btnr" variant="outline-warning" size="sm" target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/latest-news/2020/international-travelers-tech-gamechangers-and-a-yellow-jackets-quarterback-meet-the-scheller-executive-mba-class-of-2021.html">
                        Read more
                      </Button>{' '}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col xs={12} md = {6} lg = {3}>
            <Card text = "black">
            <Card.Link target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
              <Card.Body align = "left">
                <h2>03 June</h2>
                <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
                <Card.Text as="h5">
                  <strong>
                  Executive MBA Webinar Info Session
                  </strong>
                </Card.Text>
                <Card.Text align = "justify">
                  Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
                </Card.Text>
              </Card.Body>
              </Card.Link>
            </Card>

            <br/>

            <Card text = "black">
            <Card.Link target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
              <Card.Body align = "left">
              <h2>03 June</h2>
                <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
                <Card.Text as="h5">
                  <strong>
                  Executive MBA Webinar Info Session
                  </strong>
                </Card.Text>
                <Card.Text align = "justify">
                  Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
                </Card.Text>
              </Card.Body>
              </Card.Link>
            </Card>

            <br/>

            <Card text = "black">
            <Card.Link target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
              <Card.Body align = "left">
              <h2>03 June</h2>
                <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
                <Card.Text as="h5">
                  <strong>
                  Executive MBA Webinar Info Session
                  </strong>
                </Card.Text>
                <Card.Text align = "justify">
                  Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
                </Card.Text>
              </Card.Body>
              </Card.Link>
            </Card>

            <br/>

            <Card text = "black">
            <Card.Link target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
              <Card.Body align = "left">
              <h2>03 June</h2>
                <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
                <Card.Text as="h5">
                  <strong>
                  Executive MBA Webinar Info Session
                  </strong>
                </Card.Text>
                <Card.Text align = "justify">
                  Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
                </Card.Text>
              </Card.Body>
              </Card.Link>
            </Card>

            <br/>

            <Card text = "black">
            <Card.Link target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
              <Card.Body align = "left">
              <h2>03 June</h2>
                <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
                <Card.Text as="h5">
                  <strong>
                  Executive MBA Webinar Info Session
                  </strong>
                </Card.Text>
                <Card.Text align = "justify">
                  Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
                </Card.Text>
              </Card.Body>
              </Card.Link>
            </Card>

            <br/>

            <Card text = "black">
            <Card.Link target="_blank" rel="noopener noreferrer" href="https://www.scheller.gatech.edu/news-events/events/event.html?event_id=a0b1K00000iihzjQAA">
              <Card.Body align = "left">
                <h2>03 June</h2>
                <Card.Subtitle className="mb-2 text-muted">12:00 pm - 1:00 pm </Card.Subtitle>
                <Card.Text as="h5">
                  <strong>
                  Executive MBA Webinar Info Session
                  </strong>
                </Card.Text>
                <Card.Text align = "justify">
                  Attend this webinar to learn more about Georgia Tech Scheller's top-ranked Executive MBA program
                </Card.Text>
              </Card.Body>
              </Card.Link>
            </Card>

          </Col>
        </Row>
          
        <br/>  

        </div>
      		);
    }
}

export default News;