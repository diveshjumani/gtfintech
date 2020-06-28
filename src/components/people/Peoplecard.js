import React from 'react';
import 'tachyons';

const Peoplecard = ({website, imagef, name, role}) => {
    return(
        <div className = ' dib br3 pa3 ma2 grow bw2'>
                <a target="_blank" rel="noopener noreferrer" href = {website}>
                    <img class = "cardimgstyling" alt="professor" src = {process.env.PUBLIC_URL + imagef} />
                </a>
                
                <div class = "cardtextstyling">
                    <h5>{name}</h5>   
                    <h6>{role}</h6>
                </div>     
        </div>
    )
}

export default Peoplecard;