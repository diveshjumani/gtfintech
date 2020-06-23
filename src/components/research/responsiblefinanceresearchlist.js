import React from 'react';
import Researchcard from './researchcard';
import {Container} from 'react-bootstrap';

const ResponsibleFinanceresearchlist = ({ResearchArray})  => { 
    return(
        <Container fluid>
            {
                ResearchArray.map((user,i) => {
                    if (ResearchArray[i].research === 'Responsible Finance')     
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
                            author4 = {ResearchArray[i].author4}
                            author4website = {ResearchArray[i].author4website}
                            author5 = {ResearchArray[i].author5}
                            author5website = {ResearchArray[i].author5website}
                            image1 = {ResearchArray[i].image1}
                            image2 = {ResearchArray[i].image2}
                            image3 = {ResearchArray[i].image3}
                            image4 = {ResearchArray[i].image4}
                            image5 = {ResearchArray[i].image5}
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

export default ResponsibleFinanceresearchlist;