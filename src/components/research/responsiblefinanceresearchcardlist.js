import React from 'react';
import ResponsibleFinanceresearchlist from './responsiblefinanceresearchlist';
import {allresearch} from './allresearch';


const ResponsibleFinanceresearchcardlist = () => {
    return(
            <ResponsibleFinanceresearchlist ResearchArray = {allresearch} />
    )
}

export default ResponsibleFinanceresearchcardlist;