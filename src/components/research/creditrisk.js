import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_1 from '../../images/Nikhil_1.png';
import Nikhil_2 from '../../images/Nikhil_2.png';
import Nikhil_3 from '../../images/Nikhil_3.png';
import Nikhil_4 from '../../images/Nikhil_4.png';
import Nikhil_5 from '../../images/Nikhil_5.png';
import Nikhil_6 from '../../images/Nikhil_6.png';
import Nikhil_7 from '../../images/Nikhil_7.png';
import Nikhil_8 from '../../images/Nikhil_8.png';
import Nikhil_9 from '../../images/Nikhil_9.png';
import Nikhil_10 from '../../images/Nikhil_10.png';
import Nikhil_11 from '../../images/Nikhil_11.jpg';
import Nikhil_12 from '../../images/Nikhil_12.jpg';
import Nikhil_13 from '../../images/Nikhil_13.jpg';
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