import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Cog1 from '../../images/Cog1.png';
import Cog2 from '../../images/Cog2.png';
import Cog3 from '../../images/Cog3.png';
import Cog4 from '../../images/Cog4.png';
import household_finance from '../../images/household_finance.jpg';
import Householdfinanceresearchcardlist from './householdfinanceresearchcardlist';
import './research.css';

class HouseholdFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                
                <div >
                    <img class = "image-research" src={household_finance} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <h1>Household Finance</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Householdfinanceresearchcardlist />

            </div>
            );
  }
}

export default HouseholdFinance;