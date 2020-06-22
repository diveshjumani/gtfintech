import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_11 from '../../images/Nikhil_11.jpg';
import Nikhil_12 from '../../images/Nikhil_12.jpg';
import Nikhil_13 from '../../images/Nikhil_13.jpg';
import './research.css';
import Bankingresearchcardlist from './bankingresearchcardlist';

class Banking extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div>
                <div >
                    <img className = 'blur' height='350px'  src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/01/14/90c5e516-368b-11ea-9933-e21be988cd59_image_hires_185803.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">	
                    <h1>Banking</h1>
                    <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Bankingresearchcardlist />
                
                <Container fluid>
                   
                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2739">
                            <h4><b> The Effect of Banking Crisis on Bank-Fependent Borrowers  </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X10001820?via%3Dihub#!">Amiyatosh Purnanandamb</a>
                               
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
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2739">
                            <h4><b> Banking Deregulation and Innovation  </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X13000950?via%3Dihub#!">Alexander Oettl</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X13000950?via%3Dihub#!">Ajay Subramanian</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X13000950?via%3Dihub#!">Krishnamurthy V.Subramanian</a>

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
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/related-securities-and-equity-market-quality-the-case-of-cds/08DE66A250F9950FA486AE818D5E0341">
                            <h4><b> Related Securities and Equity Market Quality: The Case of CDS  </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=Ekkehart%20Boehmer&eventCode=SE-AU">Ekkehart Boehmer</a>
                                , <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=Heather%20E.%20Tookes&eventCode=SE-AU">Heather E. Tookes</a>

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
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3197326">
                            <h4><b> Impact of E-Commerce on Employees at Brick-and-Mortar Retailers </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , Alexander Oettl, Manpreet Singh, and Linghang Zeng
                                   
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
                                        Using an employer-employee payroll dataset for approximately 2.6 million retail workers, 
                                        we analyze the impact of the staggered rollout of a major e-commerce retailer's fulfillment 
                                        centers on the income and employment of workers at geographically proximate brick-and-mortar 
                                        retail stores. We find that the establishment of an e-commerce fulfillment center in a county 
                                        has a negative effect on the income of retail workers in that county and in neighboring counties 
                                        within 100 miles. Wages of hourly workers, especially part-time hourly workers, decrease significantly. 
                                        This decrease is driven by a drop in the number of hours worked. We observe a U-shaped pattern 
                                        in which both young and old workers experience a sharper decrease in wage income. Consequently, 
                                        in these counties, there is a decrease in credit scores and an increase in delinquency for retail 
                                        workers that have higher prior credit utilization. Using sales and employment data for 3.2 million 
                                        stores, we find that retail stores in counties around fulfillment centers experience a reduction in 
                                        sales and in their number of employees. Further, there is a decrease in entry and an increase in 
                                        exits for stores in the retail sector, with small and young retail stores exiting at a higher rate. 
                                        Our robustness tests show that our results are unlikely to be driven by prevailing local economic 
                                        conditions. 
                                    </p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <br/>

                    <Card>
                        <Card.Header> 
                            <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.sciencedirect.com/science/article/abs/pii/S0304405X10000772?via%3Dihub">
                            <h4><b> CEOs versus CFOs: Incentives and corporate policies </b></h4>
                            </a>
                            <h5> 
                                - <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">Sudheer Chava </a>
                                , and Amiyatosh Purnanandam
                                
                                   
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
                                        We undertake a broad-based study of the effect of managerial risk-taking incentives on corporate 
                                        financial policies and show that the risk-taking incentives of chief executive officers (CEOs) and 
                                        chief financial officers (CFOs) significantly influence their firms’ financial policies. 
                                        In particular, we find that CEOs’ risk-decreasing (-increasing) incentives are associated with 
                                        lower (higher) leverage and higher (lower) cash balances. CFOs’ risk-decreasing (-increasing) 
                                        incentives are associated with safer (riskier) debt-maturity choices and higher (lower) 
                                        earnings-smoothing through accounting accruals. We exploit the stock option expensing regulation of 
                                        2004 to establish a causal link between managerial incentives and corporate policies. Our findings 
                                        have important implications for optimal corporate compensation design.
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        We find that CEOs’ risk-decreasing (-increasing) incentives are associated with lower (higher) leverage and higher 
                                        (lower) cash balances.
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

export default Banking;