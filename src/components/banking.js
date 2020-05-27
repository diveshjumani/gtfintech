import React, { Component } from 'react';
import {Card, Image, Button, Container,Navbar,NavLink,Nav,Row,Col,Carousel} from 'react-bootstrap';
import logo from '../images/GT_White.png';
import { Link, Element, animateScroll as scroll} from 'react-scroll'

class Banking extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                 <Navbar className ="second-navbar fixed-top" variant="warning" bg ="warning" expand = "xl"> 
                 <Navbar.Brand className = "d-inline p-0 text-white" to ="/research"><img alt = "" src={logo} width="0" height="35"></img><strong>Research</strong></Navbar.Brand>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav className="mr-auto">
                            <NavLink className = "d-inline p-2 text-white">
                                    Banking
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    Household Finance
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    FinTech and Innovation
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    Responsible Finance
                                </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    Trading Strategies
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    Credit Risk
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    ML and Finance
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    NLP and Finance
                            </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    Fixed Income
                                </NavLink>
                            <NavLink className = "d-inline p-2 text-white">
                                    COVID-19
                            </NavLink>
                        </Nav>
                    </div>
                 </Navbar>

                <Card style={{ height:'100vh'}} className="research bg-dark text-white">
                    <Card.Img style={{ height:'100vh'}} fluid src="https://www.imaginesolutions.com/hubfs/Digital%20Banking%20Conference.jpg" alt="Card image" />
                </Card> 

                <br/>

                <Card>
                    <Card.Header> 
                        <h3> Reducing Risk or Reaching for Yield? Impact of Stress Tests on Credit Card Lending (Job Market Paper) </h3>
                        <h4> - Nikhil Paradkar </h4>
                    </Card.Header>
                    <Card.Body>
                    <Row>
                    <Col>
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh6.googleusercontent.com/nVFCN5Crx-DcmDpLRieuJyacKvUE9NpVrAQSq0GX7IfNmO0ka7nLNfPqebT3hbKBbB7S6VFe=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh5.googleusercontent.com/UECMHg_7gsgoAz7An0umRoB43Gd3-jRGyDcMSJ3e3QdhHmE0JSH5yGCZRVlIm8Bp8yqyWOk=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/3tWiytb4YCRA9EK8rvT1BwckMc1dUoeZTELveWf9EnrrpZfy3Urf-W4SPnmLWfJB53pKN0K8HA=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh6.googleusercontent.com/Y0on1_gvMSq3k7qqYatGekjWUySchFWV2z6JpeI6AOMiQn2JCxTxbvS9Y9rajzqBRXX9ZwE=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh5.googleusercontent.com/7Bjo3TxpnYmwXusZsTYuyEx6p3TfzHj0ny92Ke1ua2PNJsCea5FwCS8xc2Pb2nYacFi5RMUa=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    </Carousel>
                    </Col>

                    <Col>
                    <p align = "justify">
                        <strong>Abstract: </strong>
                        Using proprietary account-level data from a major credit bureau, I examine the impact of stress tests 
                        on bank risk-taking in the U.S. consumer credit card market. I decompose credit supply and demand effects 
                        by exploiting credit card--level data on limits and balances matched to both consumers and banks. 
                        For the same consumer, I examine the lending response of banks experiencing higher stress-test induced 
                        capital requirements (i.e., high-exposure banks) relative to less-exposed banks. I find that the earlier 
                        rounds of stress tests induced high-exposure banks to sharply reduce credit limits, especially to ex-ante 
                        risky borrowers. In contrast, more exposed banks in later rounds have increased limits for risky consumers. 
                        Consistent with higher bank risk-taking in later rounds, cards issued by highly-exposed banks have a higher 
                        ex-post likelihood of default. Additionally, I document that more affected non-prime borrowers are more 
                        likely to default subsequently, and that this effect is markedly pronounced for the low-income and 
                        less-educated consumer segments. My findings suggest that stress-test induced increases in capital requirements
                        can encourage higher bank risk-taking, with distributional consequences for consumer creditworthiness.
                        <br/>
                        <br/>
                        <strong>Key Takeaway: </strong>
                        Higher capital requirements can induce higher bank risk-taking, with significant distributional impact on 
                        consumer creditworthiness.
                        </p>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>

                <br/>
                
                <Card>
                    <Card.Header> 
                        <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3178322">
                        <h3> Winners and Losers of Marketplace Lending: Evidence from Borrower Credit Dynamics </h3>
                        </a>
                        <h4> - Sudheer Chava, Nikhil Paradkar and Yafei Zhang </h4>
                    </Card.Header>
                    <Card.Body>
                    <Row>
                    <Col>
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh5.googleusercontent.com/cVVU9qxXmemnMOqf0-eXjowBtDqyVfp1mW5vBH9Z91hEyiJKWdgGnmT_7Z9uNUCGE_O14LAk=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh4.googleusercontent.com/mPIZC4VzWT8WyRBgfTqgbI2HrLRLrEEK4QeWCJ0KV36zVqCbWyj_M6nuZUX0-ff7ayFa893gSQ=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh6.googleusercontent.com/zG8y-fdIkQ0qcB4izrFmz0XRLOYJ7bWb3FdAgyfSGRpsZGquNFWZma788KBjFLnsulbADtk=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh5.googleusercontent.com/pKzFWGtgmjUYuN8ewvFNEEYLBYLzvG9uRqRnMEnzeNH19qLRD2biVUuiOtC4c55jS61rmrd3_A=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh4.googleusercontent.com/qcvWFJ--Y8QIcHxzErlSPAur4UQaie0b60wUT9YvxdJK5GWN1SKpHIjzo_uuuwiDqbyOCahDiQ=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    </Carousel>
                    </Col>

                    <Col>
                    <p align = "justify">
                        <strong>Abstract: </strong>
                        Does credit from marketplace lending platforms (MPLs) benefit borrowers? Using comprehensive credit bureau data, 
                        we match one million borrowers to neighbors with identical ex-ante credit dynamics, but with unmet credit demand
                         (those originating unsecured installment loans) from banks. Comparatively, MPL borrowers' revolving balances 
                         decline 42% (13%) post-MPL origination, but revert to pre-MPL levels within a year. Their credit scores 
                         increase 21 (14) points immediately, followed by an increase in revolving limits. However, they are 96% (65%) 
                         more likely to default subsequently. Our results have implications for credit scoring methodologies and 
                         traditional banks, and suggest that MPL credit makes some borrowers worse off.
                        <br/>
                        <br/>
                        <strong>Key Takeaway: </strong>
                        Marketplace lending loans alleviate borrowers' financial constraints temporarily through increased credit 
                        scores, thus increasing credit supply from existing bank lenders, which, in turn, encourages higher total 
                        indebtedness and results in higher default propensities ex post.
                        <br/>
                        <br/>
                        <strong>Award/Grant: </strong>
                        2017 Think Forward Initiate (TFI) Research Challenge
                        <br/>
                        <br/>
                        <strong>Media: </strong>
                        American Banker (December 2018), CrowdFund Insider (July 2018)
                        </p>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>

                <br/>    

                <Card>
                    <Card.Header> 
                        <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2962476">
                        <h3> December Doldrums, Investor Distraction, and Stock Market Reaction to Unscheduled News Events </h3>
                        </a>
                        <h4> - Sudheer Chava, Nikhil Paradkar </h4>
                    </Card.Header>
                    <Card.Body>
                    <Row>
                    <Col>
                        <img
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/8OEicQ3EDS2ScLZiXRPGFXmUr5XJFdNGr8OOwXlaY5mkZjxOb5gHZJNRdu5uCEB7xVjEW87FZ5Lw2vUFTjoo-Aj3vjBP3THCBNc7FI3fj3Mjl2OvLco=w1280"
                        alt=""
                        />
                    </Col>

                    <Col>
                    <p align = "justify">
                        <strong>Abstract: </strong>
                        We document that the stock market's reaction to unscheduled firm-specific news such as credit rating downgrades
                        and 8-K filings is significantly weaker during December as compared to other months. In contrast, the market's
                        reaction to scheduled earnings announcements is not significantly different in December. We find a similar 
                        pattern for trading volume. However, this December distraction does not affect firms with greater visibility, 
                        such as larger firms, firms with higher analyst following, or higher institutional ownership. Our results 
                        highlight how investor distraction during the December holiday season can lead to a muted market reaction to 
                        unscheduled, but salient, firm-specific news.
                        <br/>
                        <br/>
                        <strong>Key Takeaway: </strong>
                        High investor inattention in December, possibly due to holiday season travel, affects the stock market reaction
                        towards unscheduled firm news, such as credit rating downgrades and 8-K filings, released in December.
                        <br/>
                        <br/>
                        <strong>Award/Grant: </strong>
                        BlackRock Prize for Best Paper on Capital Markets/Funds Management/Mutual Funds (2017 Australasian Finance and Banking 
                        Conference)
                        <br/>
                        <br/>
                        </p>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>

                <br/>   

                <Card>
                    <Card.Header> 
                        <a href = "https://drive.google.com/file/d/1L-MUljdxlI7CQGZHP0Hy4VCurNJKFsTn/view">
                        <h3> Shocked by Bank Funding Shocks: Evidence from 500 Million Consumer Credit Cards </h3>
                        </a>
                        <h4> - Sudheer Chava, Nikhil Paradkar, Rohan Ganduri and Linghang Zeng  </h4>
                    </Card.Header>
                    <Card.Body>
                    <Row>
                    <Col>
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/Le968BdGC1HyMpyxoDSiDGZoOgjYi869R3NWgT3SbjjOH95Ak7IEnK2W2NSK7trpbBHoLszi=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://lh6.googleusercontent.com/N8F7RzV288DXKEqsRhtAUVLVf4bBLxgXN410zmmfCQ4WWy1Ev94X8ku7S2UXSjq0Lff-h5BL6Q=w16383"
                        alt=""
                        />
                    </Carousel.Item>
                    </Carousel>
                    </Col>

                    <Col>
                    <p align = "justify">
                        <strong>Abstract: </strong>
                        Using comprehensive credit card--borrower--bank matched data of approximately 500 million credit cards in the U.S., 
                        we analyze how a sharp unexpected decline in banks' short-term wholesale funding in 2008 affected their consumers. 
                        For the same consumer, credit card issuers experiencing a 10% greater decline in wholesale funding reduced credit 
                        limits by 0.9% more relative to other issuers. Consumers' aggregate card balances decreased by 0.32% for a 1% 
                        reduction in aggregate limits induced by the wholesale funding liquidity shock. We document significant heterogeneity in the 
                        pass-through of the bank liquidity shocks with banks cutting credit limits by more for credit-constrained 
                        consumers (e.g., lower credit-score and higher credit utilization consumers). These consumers respond by cutting
                        their consumption as they are less able to borrow from alternate sources. Moreover, this consumption decline is
                        long-lasting for these credit-constrained consumers. Our results highlight that when banks face liquidity 
                        shocks, they are more likely to pass on these shocks to consumers who are least able to hedge against them. 
                        Consequently, our results show who bears the real costs of fragile bank funding structures. Our results also 
                        contribute to the debate on post-crisis regulatory reform on banks' funding structures that are dependent on 
                        wholesale funding by providing consumer-level elasticities of credit limits and balances to bank wholesale 
                        funding across different consumer groups.
                        <br/>
                        <br/>
                        <strong>Key Takeaway: </strong>
                        The funding structure of banks has implications for aggregate consumption, with significant long-term 
                        distributional consequences.
                        </p>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>

            <br/>
            <Button variant = "warning" onClick={this.scrollToTop}>Scroll to Top</Button>{' '}
            <br/>
            <br/>

            </div>
            );
  }
}

export default Banking;