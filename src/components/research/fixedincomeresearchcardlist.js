import React from 'react';
import Fixedincomeresearchlist from './fixedincomeresearchlist';
import {allresearch} from './allresearch';


const Fixedincomeresearchcardlist = () => {
    return(
            <Fixedincomeresearchlist ResearchArray = {allresearch} />
    )
}

export default Fixedincomeresearchcardlist;