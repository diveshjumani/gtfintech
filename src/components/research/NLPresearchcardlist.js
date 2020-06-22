import React from 'react';
import NLPresearchlist from './NLPresearchlist';
import {allresearch} from './allresearch';


const NLPresearchcardlist = () => {
    return(
            <NLPresearchlist ResearchArray = {allresearch} />
    )
}

export default NLPresearchcardlist;