import React, { Component } from 'react';
import {Card, Container,Navbar,NavLink,Nav,Row,Col,Carousel} from 'react-bootstrap';
import logo from '../images/GT_White.png';
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

class Banking extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <ResearchNavbar/>

                <div >
                    <img height = "500px" src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/01/14/90c5e516-368b-11ea-9933-e21be988cd59_image_hires_185803.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <br/> 
                        <br/> 	
                        <h1 style = {{fontSize: '600%'}} ><strong></strong></h1>
                    </div>
                </div>

                <br/>

                <Container fluid>
                    {/* <Card className = "researchcard">
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
                    
                    <br/> */}


                    <Card>
                        <Card.Header> 
                            <a href = "https://academic.oup.com/rcfs/article-abstract/7/2/276/5056934">
                            <h3> Shareholder Bargaining Power, Debt Overhang, and Investment  </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , Emmanuel Alanis
                                , and Praveen Kumar
                               
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
                                        Using a dynamic model of strategic bargaining between equity and debt holders following default, 
                                        we analyze the impact of shareholder bargaining power and debt overhang on optimal investment 
                                        and strategic default. Our empirical tests utilize a new measure of the debt overhang wedge based 
                                        on default probabilities generated from a hazard model for bankruptcy. Consistent with the theoretical
                                         predictions, bondholder (shareholder) ownership concentration ceteris paribus enhances (weakens) the
                                          overhang wedge and dampens (increases) capital investment. We identify novel ownership-structure-related
                                           factors in firm-level capital investment and document how post-default shareholder bargaining power
                                            alleviates the underinvestment problem caused by debt overhang.
                                            Received March 26, 2018; editorial decision June 20, 2018 by Editor: 
                                            Paolo Fulghieri. Authors have furnished an Internet Appendix, which is
                                             available on the Oxford University Press Web site next to the link to the final published paper online.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We identify novel ownership-structure-related
                                           factors in firm-level capital investment and document how post-default shareholder bargaining power
                                            alleviates the underinvestment problem caused by debt overhang.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>


                    <br/>




                    <Card>
                        <Card.Header> 
                            <a href = "https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2739">
                            <h3> The Dynamics of Borrower Reputation Following Financial Misreporting  </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://pubsonline.informs.org/action/doSearch?text1=Huang%2C+Kershen&field1=Contrib">Kershen Huang</a>
                                , <a target="_blank" href = "https://pubsonline.informs.org/action/doSearch?text1=Johnson%2C+Shane+A&field1=Contrib">Shane A. Johnson</a>
                               
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
                                        We study the dynamics of borrower reputation in bank loan markets following revelations of 
                                        financial misreporting by the borrower. Misreporting firms pay greater loan spreads than matched
                                         firms for at least six years following revelation of the misreporting, and there is no evidence
                                          of a downward trend in the misreporting premium. Following revelation, misreporting firms are
                                           more likely to engage in various actions to potentially rebuild their reputations, but even
                                            firms that engage in multiple actions continue to pay greater loan spreads for at least six
                                             years. Our results suggest that misreporting causes long-lasting and costly reputation losses
                                              that firms find very difficult or prohibitively costly to restore.
                                              This paper was accepted by Wei Jiang, finance.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Our results suggest that misreporting causes long-lasting and costly reputation losses
                                         that firms find very difficult or prohibitively costly to restore.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>


                    <br/>



                    <Card>
                        <Card.Header> 
                            <a href = "https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2739">
                            <h3> The Effect of Banking Crisis on Bank-Fependent Borrowers  </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X10001820?via%3Dihub#!">Amiyatosh Purnanandamb</a>
                               
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
                                        We provide causal evidence that adverse capital shocks to banks affect their borrowers’ 
                                        performance negatively. We use an exogenous shock to the U.S. banking system during the
                                         Russian crisis of Fall 1998 to separate the effect of borrowers’ demand of credit from
                                          the supply of credit by the banks. Firms that primarily relied on banks for capital
                                           suffered larger valuation losses during this period and subsequently experienced a
                                            higher decline in their capital expenditure and profitability as compared to firms
                                             that had access to the public-debt market. Consistent with an adverse shock to the supply
                                              of credit, crisis-affected banks decreased the quantity of their lending and increased loan
                                               interest rates in the post-crisis period significantly more than the unaffected banks. 
                                               Our results suggest that the global integration of the financial sector can contribute to 
                                               the propagation of financial shocks from one economy to another through the banking channel.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Our results suggest that the global integration of the financial sector can contribute to 
                                               the propagation of financial shocks from one economy to another through the banking channel
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a href = "https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2739">
                            <h3> Banking Deregulation and Innovation  </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X13000950?via%3Dihub#!">Alexander Oettl</a>
                                , <a target="_blank" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X13000950?via%3Dihub#!">Ajay Subramanian</a>
                                , <a target="_blank" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X13000950?via%3Dihub#!">Krishnamurthy V.Subramanian</a>

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
                                        We document empirical support for a key micro-level channel—innovation by young, 
                                        private firms—through which financial sector deregulation affects economic growth. 
                                        We find that intrastate banking deregulation, which increased the local market power of banks, 
                                        decreased the level and risk of innovation by young, private firms. In contrast, interstate banking
                                         deregulation, which decreased the local market power of banks, increased the level and risk of innovation
                                          by young, private firms. These contrasting effects on innovation also translated into contrasting effects
                                           on economic growth. Our study suggests that the nature of financial sector deregulation crucially affects
                                            its potential benefits to the real economy.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        Our study suggests that the nature of financial sector deregulation crucially affects
                                            its potential benefits to the real economy.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>


                    <Card>
                        <Card.Header> 
                            <a href = "https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/related-securities-and-equity-market-quality-the-case-of-cds/08DE66A250F9950FA486AE818D5E0341">
                            <h3> Related Securities and Equity Market Quality: The Case of CDS  </h3>
                            </a>
                            <h4> 
                                - <a target="_blank" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a target="_blank" href = "https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=Ekkehart%20Boehmer&eventCode=SE-AU">Ekkehart Boehmer</a>
                                , <a target="_blank" href = "https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=Heather%20E.%20Tookes&eventCode=SE-AU">Heather E. Tookes</a>

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
                                        We document that equity markets become less liquid and equity prices become less efficient
                                         when markets for single-name credit default swap (CDS) contracts emerge. This finding is
                                          robust across a variety of market quality measures. We analyze the potential mechanisms driving
                                           this result and find evidence consistent with negative trader-driven information spillovers that
                                            result from the introduction of CDS. These spillovers greatly outweigh the potentially positive effects
                                             associated with completing markets (e.g., CDS markets increase hedging opportunities) when firms and
                                              their equity markets are in “bad” states. In “good” states, we find some evidence that CDS markets
                                               can be beneficial.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We analyze the potential mechanisms driving
                                           this result and find evidence consistent with negative trader-driven information spillovers that
                                            result from the introduction of CDS.
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

export default Banking;