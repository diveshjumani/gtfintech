import React from 'react';
import 'tachyons';

const Peoplecard = ({website, imagef, name, role}) => {
    return(
        <div className = ' dib br3 pa3 ma2 grow bw2'>
                <a target="_blank" rel="noopener noreferrer" href = {website}>
                    <img style={{ width: '194px', height: '220px'}} alt="professor" src = {process.env.PUBLIC_URL + imagef} />
                </a>
                
                <div>
                    <h4><b>{name}</b></h4>   
                    <h5>{role}</h5>
                </div>     
        </div>
    )
}

export default Peoplecard;