import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_11 from '../../images/Nikhil_11.jpg';
import Nikhil_12 from '../../images/Nikhil_12.jpg';
import Nikhil_13 from '../../images/Nikhil_13.jpg';
import Fixedincomeresearchcardlist from './fixedincomeresearchcardlist';
import fixedincome from '../../images/heap-of-united-states-dollar-bills-and-calculator-4386393.jpg';
import './research.css';

class FixedIncome extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={fixedincome} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <h1>Fixed Income</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Fixedincomeresearchcardlist />

                <Container fluid>
                    
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2568121">
                            <h4><b> Financial Constraints, Monetary Policy Shocks, and the Cross-Section of Equity Returns </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2099625">Alex Hsu</a> 
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
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
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2803585">
                            <h4><b> Does History Repeat Itself? Business Cycle and Industry Returns </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2099625">Alex Hsu</a> 
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2421581">Linghang Zeng</a> 
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
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
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304393215000653?via%3Dihub">
                            <h4><b> Credit conditions and stock return predictability </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304393215000653?via%3Dihub#!">Michale Gallmeyer</a> 
                                , and <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304393215000653?via%3Dihub#!">Heungju Park</a> 
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_12}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_13}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
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
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2417499">
                            <h4><b> Do Bond Investors Price Tail Risk Exposures of Financial Institutions?</b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , Rohan Ganduri, and Vijay Yerramilli
                                   
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_11}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        We analyze whether bond investors price tail risk exposures of financial institutions using a 
                                        comprehensive sample of bond issuances by U.S. financial institutions. Although primary bond yield 
                                        spreads increase with an institutions' own tail risk (expected shortfall), systematic tail risk 
                                        (marginal expected shortfall) of the institution doesn't affect its yields. The relationship between 
                                        yield spreads and tail risk is significantly weaker for depository institutions, large institutions, 
                                        government-sponsored entities, politically-connected institutions, and in periods following 
                                        large-scale bailouts of financial institutions. Overall, our results suggest that implicit bailout 
                                        guarantees of financial institutions can exacerbate moral hazard in bond markets and weaken market discipline.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        our results point to moral hazard in the primary bond markets due to implicit bailout guarantees and cast 
                                        doubt on the idea that market discipline can be sufficient in controlling the tail risk exposures of 
                                        depository institutions.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>
                    
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X07000505?via%3Dihub">
                            <h4><b> Determinants of the floating-to-fixed rate debt structure of firms</b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                 and Amiyatosh Purnanandam
                                   
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_11}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        We analyze the effects of managerial incentive, firm characteristics and market timing on 
                                        floating-to-fixed rate debt structure of firms. We find that chief financial officer's (CFO's), 
                                        not chief executive officer's (CEO's), incentive has a strong influence on firm's debt structure. 
                                        When CFOs have incentives to increase (decrease) firm risk, firms obtain volatility-increasing 
                                        (-decreasing) debt structure. These effects are present only for CFOs who are not subject to high 
                                        monitoring by board members, CEOs, or corporate control market. Our findings suggest that agency 
                                        problems at the level of non-CEO executives could be an important driver of various corporate decisions.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Agency problems at the level of non-CEO executives could be an important driver of various corporate decisions.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3277424##">
                            <h4><b> Revealed Heuristics: Evidence from Investment Consultants’ Search Behavior </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , Soohun Kim, and Daniel Weagley
                                   
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_11}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        Using proprietary data from a major fund data provider, we analyze the screening activity of 
                                        investment consultants (ICs) who advise institutional investors with trillions of dollars in assets. 
                                        We find that ICs frequently shortlist funds using threshold screens clustered at round, base 5 or 
                                        base 10 numbers: $500MM for AUM, 0% for the return net of a benchmark, and quartiles for return 
                                        percentile rank screens. A fund’s probability of being eliminated by a screen is significantly 
                                        negatively related to its future fund attention and flows, with funds just above the $500MM AUM 
                                        threshold getting 14 to 18% more page views and 5 to 9 pps greater flows over the next year 
                                        compared to similar funds just below the threshold. Our results are consistent with ICs using 
                                        a two-stage, consider-then-choose decision making process, and cognitive reference numbers in 
                                        selecting screening thresholds.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We find that ICs frequently shortlist funds using threshold screens clustered at round, 
                                        base 5 or base 10 numbers: $500MM for AUM, 0% for the return net of a benchmark, and
                                         quartiles for return percentile rank screens.
                                    </p>
                                    </Container>
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