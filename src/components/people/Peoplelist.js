import React from 'react';
import Peoplecard from './Peoplecard';
import {Container} from 'react-bootstrap';

const Peoplelist = ({PeopleArray})  => { 
    return(
        <Container fluid>
            {
                PeopleArray.map((user,i) => {
                    return (
                        <Peoplecard
                        key = {i}
                        id = {PeopleArray[i].id}
                        name = {PeopleArray[i].name}
                        role = {PeopleArray[i].role}
                        website = {PeopleArray[i].website} 
                        imagef = {PeopleArray[i].imagef} 
                        />
                    );
                })
            }  
        </Container>
    );
}

export default Peoplelist;