import React from 'react';
import 'tachyons';

const Peoplecard = ({website, imagef, name, role}) => {
    return(
        <div className = ' dib br3 pa3 ma2 grow bw2 shadow-5'>
                <a target="_blank" rel="noopener noreferrer" href = {website}>
                    <img style={{ width: '194px', height: '220px'}} alt="professor" src = {process.env.PUBLIC_URL + imagef} />
                </a>
                
                <div>
                    <h4>{name}</h4>   
                    <p>{role}</p>
                </div>     
        </div>
    )
}

export default Peoplecard;