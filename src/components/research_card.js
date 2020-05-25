import React, {Component} from 'react';
import {Card, CardDeck, Container,Row,Col} from 'react-bootstrap';
import Paper from './Research_Paper';

class Research extends Component{
    render(){
        return(
            <Container fluid className = "people">

                <Row>
                    <Col>
                        <h1 align="center" className="sec-heading"> Research </h1>
                    <br />
                    </Col>
                </Row>

            <CardDeck>

                <Card>
                    <Card.Img variant= "top" height = "300px" src="https://www.pymnts.com/wp-content/uploads/2020/03/nucleus.jpg" />
                    <Card.Body>
                        <Card.Title>
                            Banking
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Paper/>
                    </Card.Footer>
                </Card>

                <Card>
                <Card.Img variant="top" height = "300px" src="http://www.household-finance.net/sites/hhf/files/research.jpg" />
                <Card.Body>
                    <Card.Title>Household Finance</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

            
                <Card>
                <Card.Img variant="top" height = "300px" src="https://bigdataanalyticsnews.com/wp-content/uploads/2019/05/fintech.jpg" />
                <Card.Body>
                <Card.Title>FinTech and Innovation</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

                <Card>
                <Card.Img variant="top" height = "300px" src="https://www.ca-cib.com/sites/default/files/inline-images/finance-responsable-2_0.png" />
                <Card.Body>
                <Card.Title>Responsible Finance</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

                <Card>
                <Card.Img variant="top" height = "300px" src="https://libertex.com/sites/lbxcom/files/664115914.jpg" />
                <Card.Body>
                <Card.Title>Trading Strategies</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

            </CardDeck>
            <br/>
            <CardDeck>
                <Card>
                <Card.Img variant="top" height = "300px" src="https://previews.123rf.com/images/ar130405/ar1304051509/ar130405150900236/44897487-credit-risk-concept-image-with-business-icons-and-copyspace-.jpg" />
                <Card.Body>
                    <Card.Title>Credit Risk</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

                <Card>
                <Card.Img variant="top" height = "300px" src="https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2019/02/MachineLearning.jpg" />
                <Card.Body>
                <Card.Title>Machine Learning and Finance</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

                <Card>
                <Card.Img variant="top" height = "300px" src="https://cdn.openpr.com/R/9/R91049764_g.jpg" />
                <Card.Body>
                <Card.Title>Natural Language Processing and Finance</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

                <Card>
                <Card.Img variant="top" height = "300px" src="https://wealthmd.net/wp-content/uploads/2019/07/fincome.jpg" />
                <Card.Body>
                <Card.Title>Fixed Income</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

                <Card>
                <Card.Img variant="top" height = "300px" src="https://www.worldbank.org/content/dam/photos/780x439/2020/apr/Covid-Response2020444.jpg" />
                <Card.Body>
                <Card.Title>COVID-19</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Paper/>
                </Card.Footer>
                </Card>

            </CardDeck>

            </Container>
        );
    }
}

export default Research;