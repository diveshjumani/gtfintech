import React from 'react';
import Fintechresearchlist from './fintechresearchlist';
import {allresearch} from './allresearch';


const Fintechresearchcardlist = () => {
    return(
            <Fintechresearchlist ResearchArray = {allresearch} />
    )
}

export default Fintechresearchcardlist;