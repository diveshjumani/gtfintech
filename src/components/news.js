import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class News extends Component{
    render(){
    	return(
    		<Container fluid>
    		<Row>
            <Col>
              <h1 align="center" className="sec-heading"> News </h1>
              <br />
            </Col>
          </Row>
      	</Container>
      		);
    }
}

export default News;