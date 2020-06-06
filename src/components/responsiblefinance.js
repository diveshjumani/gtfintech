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

class ResponsibleFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <ResearchNavbar/>

                <div >
                    <img height = "500px" src="https://www.scotcash.net/media/66661/money-2724241_1920.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <br/> 
                        <br/> 	
                        <h1 style = {{fontSize: '450%'}} ><strong>Responsible Finance</strong></h1>
                    </div>
                </div>

                <br/>

                <Container fluid>
                    {/* <Card className = "researchcard">
                        <Card.Header> 
                            <h3> The Economic Impact of Right-to-Work Laws: Evidence from Collective Bargaining Agreements and Corporate Policies </h3>
                            <h4>
                            - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                            , <a target="_blank" href= "https://www.scheller.gatech.edu/directory/faculty/danis/index.html">Andras Danis</a>
                            and <a target="_blank" href= "https://www.scheller.gatech.edu/directory/faculty/hsu/index.html">Alex Hsu</a>
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Carousel>
                                    </Carousel>
                                </Col>

                                <Col>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        We analyze the economic and financial impact of right-to-work (RTW) laws in the US. Using data from collective bargaining agreements, we show that there is a decrease in wages for unionized workers after RTW laws. Firms increase investment and employment but reduce financial leverage. Labor-intensive firms experience higher profits and labor-to-asset ratios. Dividends and executive compensation also increase post-RTW. Our results are consistent with a canonical theory of the firm augmented with an exogenous bargaining power of labor and suggest that RTW laws impact corporate policies by decreasing that bargaining power.
                                        <br/>
                                        <br/>
                                        <strong>Keywords: </strong>
                                        Right to Work, Collective Bargaining, Unions, Wage Growth, Investment
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


                    <br/> */}


                    <Card>
                        <Card.Header> 
                            <a href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3088612">
                            <h3> Economic Impact of Right-To-Work Laws </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Andras Danis</a>
                                ,and <a target="_blank" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2099625">Alex Hsu</a>
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
                                        We analyze the economic and financial impact of right-to-work (RTW) laws in the US. Using data from collective bargaining agreements, 
                                        we show that there is a decrease in wages for unionized workers after RTW laws. 
                                        Firms increase investment and employment but reduce financial leverage. 
                                        Labor-intensive firms experience higher profits and labor-to-asset ratios. 
                                        Dividends and executive compensation also increase post-RTW. Our results are consistent with a 
                                        canonical theory of the firm augmented with an exogenous bargaining power of labor and suggest that RTW laws impact corporate policies by 
                                        decreasing that bargaining power.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We show that there is a decrease in wages for unionized workers upon analyzing
                                         the economic and financial impact of right-to-work (RTW) laws in the US.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>


                    <Card>
                        <Card.Header> 
                            <a href = "https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2013.1863">
                            <h3> Environmental Externalities and Cost of Capital </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
           
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
                                        I analyze the impact of a firm's environmental profile on its cost of 
                                        equity and debt capital. Using implied cost of capital derived from analysts' 
                                        earnings estimates, I find that investors demand significantly higher expected 
                                        returns on stocks excluded by environmental screens (such as hazardous chemical, 
                                        substantial emissions, and climate change concerns) compared to firms without such environmental
                                         concerns. Lenders also charge a significantly higher interest rate on the bank loans issued to 
                                         firms with these environmental concerns. I provide evidence that the environmental profile of a 
                                         firm is not simply proxying for an omitted component of its default risk. Further, firms with 
                                         these environmental concerns have lower institutional ownership and fewer banks participate in 
                                         their loan syndicate than firms without such environmental concerns. These results suggest that 
                                         exclusionary socially responsible investing and environmentally sensitive lending can have a 
                                         material impact on the cost of equity and debt capital of affected firms. This paper was accepted
                                          by Brad Barber, finance.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        I provide evidence that the environmental profile of a 
                                         firm is not simply proxying for an omitted component of its default risk. Further, firms with 
                                         these environmental concerns have lower institutional ownership and fewer banks participate in 
                                         their loan syndicate than firms without such environmental concerns.
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

export default ResponsibleFinance;