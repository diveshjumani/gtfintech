import React from 'react';
import MLresearchlist from './MLresearchlist';
import {allresearch} from './allresearch';


const MLresearchcardlist = () => {
    return(
            <MLresearchlist ResearchArray = {allresearch} />
    )
}

export default MLresearchcardlist;