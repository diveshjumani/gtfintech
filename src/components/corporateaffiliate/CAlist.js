import React from 'react';
import CAcard from './CAcard';
import {Container} from 'react-bootstrap';

const CAlist = ({AffiliateArray})  => { 
    return(
        <Container>
            {
                AffiliateArray.map((user,i) => {
                    return (
                        <CAcard
                        key = {i}
                        id = {AffiliateArray[i].id}
                        website = {AffiliateArray[i].website} 
                        imageaff = {AffiliateArray[i].imageaff} 
                        />
                    );
                })
            }  
        </Container>
    );
}

export default CAlist;