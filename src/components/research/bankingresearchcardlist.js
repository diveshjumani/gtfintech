import React from 'react';
import Bankingresearchlist from './bankingresearchlist';
import {allresearch} from './allresearch';


const Bankingresearchcardlist = () => {
    return(
            <Bankingresearchlist ResearchArray = {allresearch} />
    )
}

export default Bankingresearchcardlist;