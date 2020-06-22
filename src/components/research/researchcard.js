import React from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import 'tachyons';

const researchcard = ({researchname, researchwebsite, author1, author1website, author2, author2website,author3,author3website,author4,author4website,author5,author5website,image1,image2,image3,abstract,keytakeaway}) => {
    return(
        <div> 
            <Card>
                <Card.Header> 
                    <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = {researchwebsite}>
                    <h4><b> {researchname} </b></h4>
                    </a>
                    <h5> 
                        <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = {author1website}>{author1}</a>
                        <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = {author2website}> {author2}</a>
                        <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = {author3website}> {author3}</a>
                        <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = {author4website}> {author4}</a>
                        <a style = {{textDecoration: 'none', color:'#000000'}} target="_blank" rel="noopener noreferrer" href = {author5website}> {author5}</a>
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
                                    src={process.env.PUBLIC_URL + image1}
                                    alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    height = "300px"
                                    className="d-block w-100"
                                    src={process.env.PUBLIC_URL + image2}
                                    alt=""
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    height = "300px"
                                    className="d-block w-100"
                                    src={process.env.PUBLIC_URL + image3}
                                    alt=""
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>

                        <Col xs={12} md = {12} lg = {8}>
                            <Container>
                            <p align = "justify">
                                <strong>Abstract: </strong>
                                {abstract}
                                <br/>
                                <br/>
                                <strong>Key Takeaway: </strong>
                                {keytakeaway}
                            </p>
                            </Container>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>    
        </div>
    )
}

export default researchcard;