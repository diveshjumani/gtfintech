import React from 'react';
import {Container,Card} from 'react-bootstrap';
import CAlist from './CAlist';
import {Facultypeople} from './Affiliates';


const CACardList = () => {
    return(     
            <CAlist PeopleArray = {Facultypeople} />
    )
}

export default CACardList;