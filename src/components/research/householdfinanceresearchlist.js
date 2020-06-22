import React from 'react';
import Researchcard from './researchcard';
import {Container} from 'react-bootstrap';

const Householdfinanceresearchlist = ({ResearchArray})  => { 
    return(
        <Container fluid>
            {
                ResearchArray.map((user,i) => {
                    if (ResearchArray[i].research === 'Household Finance')     
                    return (
                        <div>
                            <Researchcard
                            key = {i}
                            id = {ResearchArray[i].id}
                            researchname = {ResearchArray[i].researchname}
                            researchwebsite = {ResearchArray[i].researchwebsite}
                            author1 = {ResearchArray[i].author1}  
                            author1website = {ResearchArray[i].author1website}
                            author2 = {ResearchArray[i].author2}
                            author2website = {ResearchArray[i].author2website}
                            author3 = {ResearchArray[i].author3}
                            author3website = {ResearchArray[i].author3website}
                            image1 = {ResearchArray[i].image1}
                            image2 = {ResearchArray[i].image2}
                            image3 = {ResearchArray[i].image3}
                            abstract = {ResearchArray[i].abstract}
                            keytakeaway = {ResearchArray[i].keytakeaway} 
                            />
                            <br/>
                        </div>
                    );
                })
            }  
        </Container>
    );
}

export default Householdfinanceresearchlist;