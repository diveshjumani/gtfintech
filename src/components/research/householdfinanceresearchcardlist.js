import React from 'react';
import Householdfinanceresearchlist from './householdfinanceresearchlist';
import {allresearch} from './allresearch';


const Householdfinanceresearchcardlist = () => {
    return(
            <Householdfinanceresearchlist ResearchArray = {allresearch} />
    )
}

export default Householdfinanceresearchcardlist;