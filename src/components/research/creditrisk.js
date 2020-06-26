import React, { Component } from 'react';
import { animateScroll as scroll} from 'react-scroll'
import Creditriskresearchcardlist from './creditriskresearchcardlist';
import credit_risk from '../../images/dices-over-newspaper-2656028.jpg';
import './research.css';

class CreditRisk extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={credit_risk} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research"> 	
                        <h1>Credit Risk</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Creditriskresearchcardlist />

            </div>
            );
  }
}

export default CreditRisk;