import React, {useState, useEffect } from 'react';
import {Container,Card} from 'react-bootstrap';
import  {Button,Image} from 'react-bootstrap';
import {Element} from 'react-scroll'
import Sudheer_Chava from '../../images/Sudheer_Chava.jpg';
import PeopleCardList from './PeopleCardList';
import 'tachyons';
import './people.css'

function People() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
/*
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
*/
    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    /*
    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };
    */
        return (
            <div className="people">
                <br/>
                <br/>
                
                <div class="CL_img-container">
                    <Image class="CL_img" src="https://www.scheller.gatech.edu/pix/why-scheller/unrestricted-endowment.jpg.pagespeed.ce.9X1ZWk_qnv.jpg" alt="Nature" style={{width:'100%',height:'100%'}} />
                        <div class="text-block">
                            <br/> <br/> 
                            <h4><b>People</b></h4>
                <p align ="justify"> The Financial Services Innovation Lab at Georgia Tech is led by Dr. Sudheer Chava. The lab brings together many other faculty, undergraduate, Masters and PhD students from various colleges across Georgia Tech that are interested in the Financial Services and FinTech industry.  </p>
                        </div>
                    
                </div>

                <br/> 

                <Container fluid>
                    <Element name="director" className="element" >
                        <Card border="light" className = "noHover">
                <Card.Header as="h3"><b>Dr. Sudheer Chava</b></Card.Header>
                        </Card>
                    </Element>

                    <br/>

                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3" >
                                <a target="_blank" rel="noopener noreferrer" href = "https://www.scheller.gatech.edu/directory/faculty/chava/index.html">
                                    <img className= 'Chava' style ={{height:'34p8x'}} variant="top" src={Sudheer_Chava} />
                                </a>
                                <div>
                                    <h4>Sudheer Chava</h4>
                                    <p align = "left">
                                        Alton M. Costley Chair
                                    <br/>Professor of Finance 
                                    <br/>Area Coordinator, Finance
                                    <br/>Director, Quantitative and Computational Finance (MS-QCF)
                                    <br/>Director, Financial Services Innovation Lab
                                    <br/>Associate Director, Risk Management, Institute for Information Security and Privacy (IISP)
                                    </p>
                                </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-9">
                            <row>
                                <p align = "justify"> 
                                
                                Sudheer Chava is Alton M. Costley Chair and Professor of Finance at Scheller College of Business at Georgia Tech. He has received his Ph.D. from Cornell University in 2003. Prior to that he has an MBA degree from Indian Institute of Management – Bangalore and worked as a fixed income analyst at a leading investment bank in India. He joined Georgia Tech in 2010. <br/> <br/>
                                
                                Dr. Chava has taught a variety of courses at the undergraduate and master’s level including FinTech Ventures, Derivatives, Risk Analytics, Valuation, Cases in Financial Crisis, Management of Financial Institutions, and Credit Risk Analysis. He has also taught both theoretical and empirical finance courses at the doctoral level. <br/><br/>
                                Dr. Chava’s research interests are in Credit Risk, Banking, FinTech, Empirical Asset Pricing and Corporate Finance. He has published extensively in the top journals in
                                Finance including Journal of Finance, Journal of Financial Economics, Review of Financial Studies, Management Science, Review of Finance, Journal of Monetary Economics and
                                Journal of Financial and Quantitative Analysis. His research has won a Ross award for the best paper published in Finance Research Letters in 2008, was a finalist for Brattle 
                                Prize for the best paper published in Journal of Finance in 2008 and was nominated for the Goldman Sachs award for the best paper for published in Review of Finance during 2004. 
                                Dr. Chava is the recipient of multiple external research grants such as FDIC-CFR Fellowship, Morgan Stanley Research grant, Financial Service Exchange Research grant, Q group 
                                research award (2010, 2012) and GARP research award. He has presented his work at numerous finance conferences such as AFA, WFA, EFA, FDIC and Federal Reserve Banks and at many
                                universities in the U.S. and abroad.
                                </p>
                            </row>

                            
                            <br/>

                            <row>
                                <Button target="_blank" rel="noopener noreferrer" href = "https://scholar.google.com/citations?user=AXYf-i8AAAAJ" variant="warning">Google Scholar</Button>{' '}
                                <Button target="_blank" rel="noopener noreferrer" href = "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=292365" variant="warning">SSRN</Button>{' '}
                                <Button target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/sudheer-chava-b5883021/" variant="warning">LinkedIn</Button>{' '}
                            </row>
                        </div>
                    </div>
                </Container>

                <br/>

                <PeopleCardList />

                <br/>
                
            </div>
        );
    }

export default People;
