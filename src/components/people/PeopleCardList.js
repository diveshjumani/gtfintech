import React from 'react';
import {Container,Card} from 'react-bootstrap';
import Peoplelist from './Peoplelist';
import {Facultypeople} from './Facultypeople';
import {PhDpeople} from './PhDpeople';
import {MSpeople} from './MSpeople';
import {UGpeople} from './UGpeople';


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
                    <Card.Header as="h3"><b>PhD Students</b></Card.Header>
                </Card> 
            </Container>        
                        
            <br/>

            <Peoplelist PeopleArray = {PhDpeople} />

            <br/>

            <Container fluid>
                <Card border="light" className = "noHover">
                    <Card.Header as="h3"><b>MS Students</b></Card.Header>
                </Card>
            </Container> 
            
            <br/>

            <Peoplelist PeopleArray = {MSpeople} />

            <br/>

            <Container fluid>
                <Card border="light" className = "noHover">
                    <Card.Header as="h3"><b>Undergrad Students</b></Card.Header>
                </Card>
            </Container> 
            
            <br/>

            <Peoplelist PeopleArray = {UGpeople} />

        </div>
    )
}

export default PeopleCardList;