import React from 'react';
import {Container} from 'react-bootstrap';
import Peoplelist from './Peoplelist';
import {Facultypeople} from './Facultypeople';
import {PhDpeople} from './PhDpeople';
import {Alumni} from './Alumni';
import {UGpeople} from './UGpeople';
import {MSpeople} from './MSpeople';


const PeopleCardList = () => {
    return(
        <div>
            <Container fluid>
                <h2><b> Faculty </b></h2>
            </Container>
                
            <Peoplelist PeopleArray = {Facultypeople} />

            <Container fluid>
                <h2><b> Doctoral Students </b></h2>
            </Container>       

            <Peoplelist PeopleArray = {PhDpeople} />

            <Container fluid>
                <h2><b> Masters Students </b></h2> 
            </Container> 

            <Peoplelist PeopleArray = {MSpeople} />

            <Container fluid>
                <h2><b> Undergrad Students </b></h2> 
            </Container> 

            <Peoplelist PeopleArray = {UGpeople} />

            <Container fluid>
                <h2><b> Alumni </b></h2> 
            </Container> 
            
            <Peoplelist PeopleArray = {Alumni} />

        </div>
    )
}

export default PeopleCardList;