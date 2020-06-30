import React, {Component} from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './data.css'
import data_img from '../../images/banner-909710.jpg';

class data extends Component{
    render(){
    	return(
    	<div className = "data">
				<br/>
				<br/>	
				<div >
                    <img className="CL_data_img" src={data_img} alt="" style={{width:'100%'}}/>
                    <div className="text-block-data">
                        <h1 style = {{fontSize: '500%'}} ><strong>Data</strong></h1>
                    </div>
                </div>

				<Container fluid>
				<Card className="CL_data_outer" bg="light" text="dark" style={{ width: '100%' }}>
				<Card.Header style={{fontWeight: "600"}} as="h5"> Bankruptcy Data (1964-2016) </Card.Header>
				<Card.Body>
					<Card.Title className="CL_data_card_title">Please <Link style={{color: "#007bff"}} to='/gtfintech/contactus'>contact us</Link> if you want access to the bankruptcy data used in the following papers</Card.Title>
					<Card.Text>
					<ListGroup>
						<ListGroup.Item ><a style={{fontWeight: "400"}} target="_blank" rel="noopener noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=287474">Chava, Sudheer and Robert Jarrow, 2004, “Bankruptcy Prediction with Industry Effects”, <b>Review of Finance</b>, 2004, 8(4), 537-569</a></ListGroup.Item>
						<ListGroup.Item ><a style={{fontWeight: "400"}} target="_blank" rel="noopener noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1677653">Chava, Sudheer, 2014, “Environmental Externalities and Cost of Capital”, <b> Management Science </b>, 60(9):2223-2247</a></ListGroup.Item>
						<ListGroup.Item ><a style={{fontWeight: "400"}} target="_blank" rel="noopener noreferrer" href="https://pubsonline.informs.org/doi/abs/10.1287/mnsc.1110.1345">Chava, Sudheer, Catalina Stefanescu and Stuart Turnbull, 2011, “Modeling the loss distribution”, <b> Management Science </b>, 57(7), 1267-1287</a></ListGroup.Item>
						<ListGroup.Item ><a style={{fontWeight: "400"}} target="_blank" rel="noopener noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1003682">Chava, Sudheer and Amiyatosh Purnanandam, 2010, “Is Default Risk Negatively Related to Stock Returns?”, <b> Review of Financial Studies </b>, 23, 2523 - 2559.</a></ListGroup.Item>
						<ListGroup.Item ><a style={{fontWeight: "400"}} target="_blank" rel="noopener noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2053511">Alanis, Emmanuel, Sudheer Chava and Praveen Kumar, 2015, “Shareholder Bargaining Power, Debt Overhang and Investment”, <b> Review of Corporate Finance Studies</b>, 7(2), 276-318.</a></ListGroup.Item>
					</ListGroup>
					</Card.Text>
				</Card.Body>
				</Card>
				<Card className="CL_data_outer" bg="light" text="dark" style={{ width: '100%' }}>
				<Card.Header style={{fontWeight: "600"}} as="h5"> Dealscan-Compustat Link Data </Card.Header>
				<Card.Body>
					<Card.Title className="CL_data_card_title">Available at <a style={{color: "#007bff"}} target="_blank" rel="noopener noreferrer" href="http://finance.wharton.upenn.edu/~mrrobert/styled-9/styled-12/index.html">Michael R. Robert</a>'s website</Card.Title>
					<Card.Text>
					<ListGroup>
						<ListGroup.Item ><a style={{fontWeight: "400"}} target="_blank" rel="noopener noreferrer" href="http://finance.wharton.upenn.edu/~mrrobert/resources/Publications/CovenantInvestmentJF2008.pdf">Chava, Sudheer and Michael Roberts, 2008, "How Does Financing Impact Investment? The Role of Debt Covenant Violations", <b>Journal of Finance</b>, 63(5), 2085-2121</a></ListGroup.Item>
					</ListGroup>
					</Card.Text>
				</Card.Body>
				</Card>
				<Card className="CL_data_outer" bg="light" text="dark" style={{ width: '100%' }}>
				<Card.Header style={{fontWeight: "600"}} as="h5"> Debt Overhang Measures </Card.Header>
				<Card.Body>
					<Card.Title className="CL_data_card_title">Please <Link style={{color: "#007bff"}} to='/gtfintech/contactus'>contact us</Link> if you want access to the bankruptcy data used in the following papers</Card.Title>
					<Card.Text>
					<ListGroup>
						<ListGroup.Item ><a style={{fontWeight: "400"}} target="_blank" rel="noopener noreferrer" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2053511">Alanis, Emmanuel, Sudheer Chava and Praveen Kumar, 2015, “Shareholder Bargaining Power, Debt Overhang and Investment”, <b> Review of Corporate Finance Studies</b>, 7(2), 276-318.</a></ListGroup.Item>
					</ListGroup>
					</Card.Text>
				</Card.Body>
				</Card>
				</Container>
    	</div>
    	);
    }
}

export default data;
