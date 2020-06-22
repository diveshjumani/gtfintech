import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_1 from '../../images/Nikhil_1.png';
import Nikhil_2 from '../../images/Nikhil_2.png';
import Nikhil_3 from '../../images/Nikhil_3.png';
import Nikhil_4 from '../../images/Nikhil_4.png';
import Nikhil_5 from '../../images/Nikhil_5.png';
import Nikhil_6 from '../../images/Nikhil_6.png';
import Nikhil_7 from '../../images/Nikhil_7.png';
import Nikhil_8 from '../../images/Nikhil_8.png';
import Nikhil_9 from '../../images/Nikhil_9.png';
import Nikhil_10 from '../../images/Nikhil_10.png';
import Nikhil_11 from '../../images/Nikhil_11.jpg';
import Nikhil_12 from '../../images/Nikhil_12.jpg';
import Nikhil_13 from '../../images/Nikhil_13.jpg';
import Creditriskresearchcardlist from './bankingresearchcardlist';
import './research.css';

class CreditRisk extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img className = 'blur' height='350px' src="https://www.marketing91.com/wp-content/uploads/2019/02/Credit-Risk-4.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research"> 	
                        <h1>Credit Risk</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Creditriskresearchcardlist />

                <Container fluid>
                    <Card className = "researchcard">
                        <Card.Header> 
                            <h4>
                                <b>Reducing Risk or Reaching for Yield? Impact of Stress Tests on Credit Card Lending (Job Market Paper) </b>
                            </h4>
                            <h5>
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a>
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
                                            src={Nikhil_1}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_2}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_3}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_4}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_5}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
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
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>
                
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3178322">
                            <h4><b> Winners and Losers of Marketplace Lending: Evidence from Borrower Credit Dynamics </b></h4>
                            </a>
                            <h5>
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a>
                                and 
                                Yafei Zhang 
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
                                            src={Nikhil_6}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_7}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_8}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_9}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "300px"
                                            className="d-block w-100"
                                            src={Nikhil_10}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                    <Container>
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
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>    

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2962476">
                            <h4><b> December Doldrums, Investor Distraction, and Stock Market Reaction to Unscheduled News Events </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a> 
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {4}>
                                    <img
                                    className="d-block w-100"
                                    src={Nikhil_11}
                                    alt=""
                                    />
                                </Col>

                                <Col xs={12} md = {12} lg = {8}>
                                <Container>
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
                                    
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>   

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://drive.google.com/file/d/1L-MUljdxlI7CQGZHP0Hy4VCurNJKFsTn/view">
                            <h4><b> Shocked by Bank Funding Shocks: Evidence from 500 Million Consumer Credit Cards </b></h4>
                            </a>
                            <h5>
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href= "https://www.nikhil-paradkar.com/home">Nikhil Paradkar</a>
                                , 
                                Rohan Ganduri 
                                and 
                                Linghang Zeng  
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
                                        Consequently, our results show who bears the real costs of fragile bank funding structures. 
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://drive.google.com/file/d/1L-MUljdxlI7CQGZHP0Hy4VCurNJKFsTn/view">
                            <h4><b> Do Credit Default Swaps Mitigate the Impact of Credit Rating Downgrades? </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , Rohan Ganduri
                                , Chayawat Ornthanalai 
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
                                        We find that a firm’s stock price reaction to its credit rating downgrade announcement is muted
                                         by 44–52% when credit default swaps (CDSs) trade on its debt. We explore the role of the CDS 
                                         markets in providing information ex ante and relieving financing frictions ex post for downgraded
                                          firms. We find that the impact of CDS trading is more pronounced for firms whose debt financing 
                                          is more dependent on credit ratings (e.g., those rated around the speculative-grade boundary, 
                                          those with a higher number of rating-based covenants). Reductions in debt and investment, and 
                                          the increase in financing costs are less severe for CDS firms than non-CDS firms following an 
                                          identical credit rating downgrade. Our results suggest that CDSs mute the stock market reaction
                                           to a credit rating downgrade by alleviating the financing frictions faced by downgraded firms.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Reductions in debt and investment, and 
                                          the increase in financing costs are less severe for CDS firms than non-CDS firms following an 
                                          identical credit rating downgrade. Our results suggest that CDSs mute the stock market reaction
                                           to a credit rating downgrade by alleviating the financing frictions faced by downgraded firms.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://drive.google.com/file/d/1L-MUljdxlI7CQGZHP0Hy4VCurNJKFsTn/view">
                            <h4><b> Covenants, Creditors’ Simultaneous Equity Holdings, and Firm Investment Policies </b></h4>
                            </a>
                            <h5>
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=Hong%20Zou&eventCode=SE-AU">Hong Zou</a>
                            
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
                                        This article analyzes how creditors’ simultaneous debt and equity holdings affect firm
                                         investment policies. We find that firms with dual ownership are less likely to have capital
                                          expenditure restrictions in loan contracts, and the relation varies in predicted ways with
                                           the monitoring needs of borrowers and the monitoring capacity of dual owners. A less frequent
                                            use of capital expenditure restrictions, however, does not result in borrowers’ risk-shifting.
                                             Dual ownership firms are also more likely to be granted an unconditional waiver and do not
                                              significantly reduce debt issuance or investment expenditures after a financial covenant
                                               violation. Our results highlight how dual ownership can help mitigate shareholder–creditor
                                                conflicts.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Our results highlight how dual ownership can help mitigate shareholder–creditor
                                                conflicts.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://academic.oup.com/rcfs/article/6/2/234/3867024">
                            <h4><b> Lending to Innovative Firms  </b></h4>
                            </a>
                            <h5>
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , Vikram Nanda
                                , Steven Chong Xiao
                            
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
                                        Is bank financing compatible with innovation? We show that an exogenous enhancement in the value of borrowers patents, 
                                        either through greater patent protection or creditor rights over collateral, results in cheaper loans. Using regression
                                        discontinuity design, we show that although R&D investment sharply drops following a financial covenant violation, the
                                         reduction is concentrated in firms with less productive R&D. Consequently, R&D reduction does not impair innovative
                                          output. Our results suggest that the property rights that patents confer to intellectual property and to lenders
                                          judicious exercise of control rights allow bank loans to be a viable means of financing for innovative firms.

                                        Received January 9, 2017; editorial decision May 27, 2017 by Editor Paolo Fulghieri.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We show that an exogenous enhancement in the value of borrowers patents, 
                                        either through greater patent protection or creditor rights over collateral, results in cheaper loans.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>
                    
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://academic.oup.com/rfs/article-abstract/23/6/2523/1565368?redirectedFrom=fulltext">
                            <h4><b> Is Default Risk Negatively Related to Stock Returns? </b></h4>
                            </a>
                            <h5>
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                and 
                                Amiyatosh Purnanandam   
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
                                        We find a positive cross-sectional relationship between expected stock returns and default risk, 
                                        contrary to the negative relationship estimated by prior studies. Whereas prior studies use noisy 
                                        ex post realized returns to estimate expected returns, we use ex ante estimates based on the 
                                        implied cost of capital. The results suggest that investors expected higher returns for bearing 
                                        default risk, but they were negatively surprised by lower-than-expected returns on high default 
                                        risk stocks in the 1980s. We also extend the sample compared with prior studies and find that 
                                        the evidence based on realized returns is considerably weaker in the 1952–1980 period.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Investors expected higher returns for bearing default risk, but they were negatively 
                                        surprised by lower-than-expected returns on high default risk stocks in the 1980s.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>
                                            
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://academic.oup.com/rfs/article-abstract/23/3/1120/1595337?redirectedFrom=fulltext">
                            <h4><b> Managerial Agency and Bond Covenants </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , Praveen Kumar, and Arthur Warga
                                   
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
                                        Based on an analysis of the agency risk for bondholders from managerial entrenchment and fraud, 
                                        we derive and test refutable hypotheses about the influence of managerial agency risk on bond 
                                        covenants, using a comprehensive database of corporate bonds from the 1993–2007 period. 
                                        Managerial entrenchment and the risk of managerial fraud significantly influence the use 
                                        of covenants, in the direction predicted by the agency-theoretic framework. Our analysis 
                                        highlights the varied effects of entrenchment on different types of agency risks faced by 
                                        bondholders: Entrenched managers aggravate investment risk, but ameliorate risk from 
                                        shareholder opportunism. Covenant use also responds efficiently to the quality of information 
                                        available regarding the risk of managerial fraud.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Managerial entrenchment and the risk of managerial fraud significantly influence the use 
                                        of covenants, in the direction predicted by the agency-theoretic framework.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>
                     
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.nowpublishers.com/article/Details/CFR-0060">
                            <h4><b> Shareholder Rights Do Affect the Cost of Bank Loan </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , Dmitry Livdan and Amiyatosh Purnanandam
                                   
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
                                        Gaul et al. (2018) (GJU) argue that our finding in Chava et al. (2008) (CLP)—that firms with lower 
                                        takeover defenses pay significantly higher spread on their bank loans—is driven by an omitted variable, 
                                        namely the unobserved asset volatility of the firm. We argue against GJU’s conclusions based on their 
                                        own findings, conceptual flaws in their underlying economic arguments, serious limitations of their 
                                        empirical work, and the findings of other published papers in the literature. GJU’s results show 
                                        that our findings are robust both when they replicate our main results and also when they include 
                                        equity volatility as an additional control variable in lieu of unobserved asset volatility. The 
                                        only specification where GJU question our main findings is when they model equity volatility as a 
                                        mis-measured value of unobserved asset volatility and use an instrumental variable regression model 
                                        with the volatility of firm’s accounting earnings as an instrument. We disagree with the underlying 
                                        economic logic behind this approach: equity volatility is a meaningful economic transformation of 
                                        asset volatility, not its mis-measured value. Further, we find it implausible that their accounting 
                                        earnings based instrument satisfies the exclusion restriction because a firm’s accounting earnings itself 
                                        depends on its governance, managerial incentives, and a host of other factors. 
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>
                    
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://onlinelibrary.wiley.com/doi/full/10.1111/j.1540-6261.2008.01391.x">
                            <h4><b> How Does Financing Impact Investment? The Role of Debt Covenants </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , and Michael R. Roberts
                                   
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
                                        We identify a specific channel (debt covenants) and the corresponding mechanism 
                                        (transfer of control rights) through which financing frictions impact corporate 
                                        investment. Using a regression discontinuity design, we show that capital investment 
                                        declines sharply following a financial covenant violation, when creditors use the 
                                        threat of accelerating the loan to intervene in management. Further, the reduction 
                                        in investment is concentrated in situations in which agency and information problems 
                                        are relatively more severe, highlighting how the state‐contingent allocation of control 
                                        rights can help mitigate investment distortions arising from financing frictions.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We show that capital investment declines sharply following a financial covenant violation, when 
                                        creditors use the threat of accelerating the loan to intervene in management.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://academic.oup.com/rof/article-abstract/8/4/537/1582202?redirectedFrom=fulltext">
                            <h4><b> Bankruptcy Prediction with Industry Effects </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                 and Robert A. Jarrow
                                   
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
                                        This paper investigates the forecasting accuracy of bankruptcy hazard rate models for U.S. 
                                        companies over the time period 1962–1999 using both yearly and monthly observation intervals. 
                                        The contribution of this paper is multiple-fold. One, using an expanded bankruptcy database 
                                        we validate the superior forecasting performance of Shumway's (2001) model as opposed to 
                                        Altman (1968) and Zmijewski (1984). Two, we demonstrate the importance of including industry 
                                        effects in hazard rate estimation. Industry groupings are shown to significantly affect both 
                                        the intercept and slope coefficients in the forecasting equations. Three, we extend the hazard 
                                        rate model to apply to financial firms and monthly observation intervals. Due to data limitations, 
                                        most of the existing literature employs only yearly observations. We show that bankruptcy 
                                        prediction is markedly improved using monthly observation intervals. Fourth, consistent with the 
                                        notion of market efficiency with respect to publicly available information, we demonstrate that 
                                        accounting variables add little predictive power when market variables are already included in 
                                        the bankruptcy model.
                                       
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2541102">
                            <h4><b> Credit Default Swaps and Lender Incentives in Renegotiations of Bank Debt </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , Indraneel Chakraborty, and Rohan Ganduri
                                   
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
                                        We analyze how Credit Default Swaps (CDS) affect bank incentives and borrower outcomes in 
                                        renegotiations after covenant violations. Using a regression-discontinuity design and within 
                                        lender-borrower variation, we find that CDS firms maintain investment after control rights 
                                        shift to the creditor, whereas non-CDS firms experience a significant decline. Moreover, 
                                        CDS firms are less likely to experience distressed exits or rating downgrades in the two 
                                        years after these technical defaults. Our results suggest that in the private debt markets, 
                                        CDS discipline borrowers, while the empty creditor problem due to CDS is mitigated because 
                                        of lenders' reputation concerns and lower coordination frictions.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Our results suggest that CDS can be beneficial in the bank lending market. 
                                        Con- sequently, we contribute to the policy debate on the regulation of CDS and other 
                                        similar financial derivatives by documenting a beneficial role of CDS.
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1983456">
                            <h4><b> Signaling through Dynamic Thresholds in Financial Covenants </b></h4>
                            </a>
                            <h5>
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , Shunlan Fang, and Saumya Prabhat
                                   
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
                                        Among loan contracts with covenants originated during 1996-2012, 35% have financial covenant 
                                        thresholds that automatically tighten following a predetermined schedule. Firms accepting 
                                        dynamic covenant thresholds improve creditworthiness but are more likely to violate covenants 
                                        relative to matched control firms. In the event of a covenant violation, these firms are less 
                                        likely to receive a waiver, more likely to pay higher waiver fees, experience greater investment 
                                        cuts, and are more likely to switch lead lenders. Overall, our findings suggest that signaling 
                                        through dynamic thresholds in covenants on average is credible but costly to borrowers if they 
                                        fail to deliver the performance as signaled.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Our study extends prior studies on creditor control by examining the credibility of information 
                                        implied by covenant thresholds and the interactions between creditors and borrowers if borrowers 
                                        fail to improve creditworthiness as initially agreed. 
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
                                        Our results point to moral hazard in the primary bond markets due to implicit bailout guarantees and cast 
                                        doubt on the idea that market discipline can be sufficient in controlling the tail risk exposures of 
                                        depository institutions.
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

export default CreditRisk;