import React from 'react';
import 'tachyons';

const CAcard = ({website, imageaff}) => {
    return(
        <div className = ' dib br3 pa3 ma2 grow bw2'>
                <a target="_blank" rel="noopener noreferrer" href = {website}>
                    <img style={{ width: '175px', height: '200px'}} alt="affiliate" src = {process.env.PUBLIC_URL + imageaff} />
                </a>   
        </div>
    )
}

export default CAcard;