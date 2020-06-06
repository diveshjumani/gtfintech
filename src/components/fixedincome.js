import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_1 from '../images/Nikhil_1.png';
import Nikhil_2 from '../images/Nikhil_2.png';
import Nikhil_3 from '../images/Nikhil_3.png';
import Nikhil_4 from '../images/Nikhil_4.png';
import Nikhil_5 from '../images/Nikhil_5.png';
import Nikhil_6 from '../images/Nikhil_6.png';
import Nikhil_7 from '../images/Nikhil_7.png';
import Nikhil_8 from '../images/Nikhil_8.png';
import Nikhil_9 from '../images/Nikhil_9.png';
import Nikhil_10 from '../images/Nikhil_10.png';
import Nikhil_11 from '../images/Nikhil_11.jpg';
import Nikhil_12 from '../images/Nikhil_12.jpg';
import Nikhil_13 from '../images/Nikhil_13.jpg';
import ResearchNavbar from './researchnavbar';

class FixedIncome extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <ResearchNavbar/>

                <div >
                    <img height = "500px" src="https://www.upal.com/wp-content/uploads/2018/12/fixedincome.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <br/> 
                        <br/> 	
                        <h1 style = {{fontSize: '500%'}} ><strong></strong></h1>
                    </div>
                </div>

                <br/>

                <Container fluid>
                    <Card className = "researchcard">
                        <Card.Header> 
                            <h3> Reducing Risk or Reaching for Yield? Impact of Stress Tests on Credit Card Lending (Job Market Paper) </h3>
                            <h4> - <a target="_blank" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a></h4>
                            
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_1}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_2}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_3}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_4}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_5}
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
                            <h4>
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a>
                                and 
                                Yafei Zhang 
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_6}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_7}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_8}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_9}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_10}
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
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a> 
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <img
                                    className="d-block w-100"
                                    src={Nikhil_11}
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
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a>
                                , 
                                Rohan Ganduri 
                                and 
                                Linghang Zeng  
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_13}
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



                    <Card>
                        <Card.Header> 
                            <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2568121">
                            <h3> Financial Constraints, Monetary Policy Shocks, and the Cross-Section of Equity Returns </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2099625">Alex Hsu</a> 
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        We analyze the impact of unanticipated monetary policy changes on 
                                        equity returns and document that financially constrained firms earn a significantly 
                                        lower return following rate increases as compared to unconstrained firms. Trading volume 
                                        is significantly lower for constrained firms on FOMC announcement days but the differential 
                                        return response manifests with a delay. Further, unanticipated increases in Federal funds rate
                                         are associated with a larger decrease in expected cash flow news, but not of discount rate news
                                         , for constrained firms relative to unconstrained firms. Our results highlight how monetary policy shocks have a disproportionate real impact on financially constrained firms.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        The trading volume is significantly lower for constrained firms on FOMC announcement days but the differential 
                                        return response manifests with a delay
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>



                    <Card>
                        <Card.Header> 
                            <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2803585">
                            <h3> Does History Repeat Itself? Business Cycle and Industry Returns </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2099625">Alex Hsu</a> 
                                , <a target="_blank" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2421581">Linghang Zeng</a> 
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        Industries with higher historical business cycle regime Sharpe ratios (RSR) have higher regime-dependent
                                         expected returns. Conditional on whether output gap is positive or negative, an out-of-sample long-high-RSR
                                          and short-low-RSR sector rotation strategy generates 14.02% annualized alpha in Fama-French five-factor model
                                           during 1985-2014. Industry momentum and related anomalies are unlikely to be the source of alpha. Firms in long 
                                           portfolios have stronger fundamentals, more upward analyst forecast revisions, and more positive forecast errors. 
                                           Our results suggest that investors don't fully incorporate business cycle variation in cash flow growth and highlight
                                            the importance of business cycle on the cross-section of industry returns.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Industries with higher historical business cycle regime Sharpe ratios (RSR) have higher regime-dependent
                                         expected returns.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>





                    <Card>
                        <Card.Header> 
                            <a href = "https://www.sciencedirect.com/science/article/abs/pii/S0304393215000653?via%3Dihub">
                            <h3> Credit conditions and stock return predictability </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304393215000653?via%3Dihub#!">Michale Gallmeyer</a> 
                                , and <a target="_blank" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304393215000653?via%3Dihub#!">Heungju Park</a> 
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        U.S. stock return predictability is analyzed using a measure of credit standards
                                         (Standards) derived from the Federal Reserve Board׳s Senior Loan Officer Opinion Survey on Bank Lending 
                                         Practices. Standards is a strong predictor of stock returns at a business cycle frequency, especially in the
                                          post-1990 data period. Empirically, a tightening of Standards predicts lower future stock returns. Standards 
                                          erforms well both in-sample and out-of-sample and is robust to a host of consistency checks. Standards captures
                                           stock return predictability at a business cycle frequency and is driven primarily by the ability of Standards 
                                           to predict cash flow news.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        • U.S. stock return predictability is studied using credit standards (Standards).
                                        •Standards is a strong predictor of stock returns at a business cycle frequency.
                                        •A tightening of Standards predicts lower future stock returns.
                                        •The predictability of Standards is driven by the ability to predict cash flow news.
                                        •The predictability of Standards is robust to a host of consistency checks.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>




                    
                    <br/>
                </Container>


            </div>
            );
  }
}

export default FixedIncome;