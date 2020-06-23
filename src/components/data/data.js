import React, {Component} from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import './data.css'
import data_img from '../../images/data_page_img.jpg';

class data extends Component{
    render(){
    	return(
    	<div className = "data">	
				<div >
                    <img height = "300px" src={data_img} alt="" style={{width:'100%'}}/>
                    <div class="text-block-ca">
                        <h1 align="left" style = {{fontSize: '500%'}} ><strong>Data</strong></h1>
                    </div>
                </div>

				<Container fluid>
				<Card className="CL_data_outer" bg="dark" text="white" style={{ width: '100%' }}>
				<Card.Header as="h5"> Bankruptcy Data (1964-2016) </Card.Header>
				<Card.Body>
					<Card.Title className="CL_data_card_title">Please send an email to <a href="mailto:sudheer.chava@scheller.gatech.edu">Dr. Chava</a> if you want access to the bankruptcy data used in the following papers</Card.Title>
					<Card.Text>
					<ListGroup>
						<ListGroup.Item variant="dark">Chava, Sudheer and Robert Jarrow, 2004, “Bankruptcy Prediction with Industry Effects”, <b>Review of Finance</b>, 2004, 8(4), 537-569</ListGroup.Item>
						<ListGroup.Item variant="secondary">Chava, Sudheer, 2014, “Environmental Externalities and Cost of Capital”, <b> Management Science </b>, 60(9):2223-2247</ListGroup.Item>
						<ListGroup.Item variant="dark">Chava, Sudheer, Catalina Stefanescu and Stuart Turnbull, 2011, “Modeling Expected Loss”, <b> Management Science </b>, 57, 1267-1287</ListGroup.Item>
						<ListGroup.Item variant="secondary">Chava, Sudheer and Amiyatosh Purnanandam, 2010, "Is Default Risk Negatively Related to Stock Returns?, <b> Review of Financial Studies </b> , 23, 2523 - 2559.</ListGroup.Item>
						<ListGroup.Item variant="dark">Alanis, Emmanuel, Sudheer Chava and Praveen Kumar, 2015, “Shareholder Bargaining Power, Debt Overhang and Investment” in <b> Review of Corporate Finance Studies</b></ListGroup.Item>
					</ListGroup>
					</Card.Text>
				</Card.Body>
				</Card>
				<Card className="CL_data_outer" bg="dark" text="white" style={{ width: '100%' }}>
				<Card.Header as="h5"> Dealscan-Compustat Link Data </Card.Header>
				<Card.Body>
					<Card.Title className="CL_data_card_title"><a href="http://finance.wharton.upenn.edu/~mrrobert/styled-9/styled-12/index.html"> Available at Michael R. Robert's website</a></Card.Title>
					<Card.Text>
					<ListGroup>
						<ListGroup.Item variant="dark">Chava, Sudheer and Michael Roberts, 2008, "How Does Financing Impact Investment? The Role of Debt Covenant Violations", <b>Journal of Finance</b>, 63(5), 2085-2121</ListGroup.Item>
					</ListGroup>
					</Card.Text>
				</Card.Body>
				</Card>
				<Card className="CL_data_outer" bg="dark" text="white" style={{ width: '100%' }}>
				<Card.Header as="h5"> Debt Overhang Measures </Card.Header>
				<Card.Body>
					<Card.Title className="CL_data_card_title">Please send an email to <a href="mailto:sudheer.chava@scheller.gatech.edu">Dr. Chava</a> if you want access to the bankruptcy data used in the following papers</Card.Title>
					<Card.Text>
					<ListGroup>
						<ListGroup.Item variant="dark">Alanis, Emmanuel, Sudheer Chava and Praveen Kumar, 2015, “Shareholder Bargaining Power, Debt Overhang and Investment” in <b> Review of Corporate Finance Studies</b></ListGroup.Item>
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
