import React from 'react';
import {Container,Card} from 'react-bootstrap';
import Peoplelist from './Peoplelist';
import {Facultypeople} from './Facultypeople';
import {PhDpeople} from './PhDpeople';
import {Alumni} from './Alumni';
import {MSUGpeople} from './MSUGpeople';


const PeopleCardList = () => {
    return(
        <div>
            <Container fluid>
                <Card border="light" className = "noHover">
                    <Card.Header as="h3"><b>Faculty</b></Card.Header>
                </Card>
            </Container>
                
            <br/>

            <Peoplelist PeopleArray = {Facultypeople} />

            <br/>

            <Container fluid>
                <Card border="light" className = "noHover">
                    <Card.Header as="h3"><b>PhD</b></Card.Header>
                </Card> 
            </Container>        
                        
            <br/>

            <Peoplelist PeopleArray = {PhDpeople} />

            <br/>

            <Container fluid>
                <Card border="light" className = "noHover">
                    <Card.Header as="h3"><b>Alumni</b></Card.Header>
                </Card>
            </Container> 
            
            <br/>

            <Peoplelist PeopleArray = {Alumni} />

            <br/>

            <Container fluid>
                <Card border="light" className = "noHover">
                    <Card.Header as="h3"><b>Masters/Undergrad Students</b></Card.Header>
                </Card>
            </Container> 
            
            <br/>

            <Peoplelist PeopleArray = {MSUGpeople} />

        </div>
    )
}

export default PeopleCardList;