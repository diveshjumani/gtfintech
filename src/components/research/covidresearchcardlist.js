import React from 'react';
import COVIDresearchlist from './covidresearchlist';
import {allresearch} from './allresearch';


const COVIDresearchcardlist = () => {
    return(
            <COVIDresearchlist ResearchArray = {allresearch} />
    )
}

export default COVIDresearchcardlist;