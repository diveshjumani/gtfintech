import React from 'react';
import Tradingresearchlist from './tradingresearchlist';
import {allresearch} from './allresearch';


const Tradingresearchcardlist = () => {
    return(
            <Tradingresearchlist ResearchArray = {allresearch} />
    )
}

export default Tradingresearchcardlist;