import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_11 from '../../images/Nikhil_11.jpg';
import Nikhil_12 from '../../images/Nikhil_12.jpg';
import Nikhil_13 from '../../images/Nikhil_13.jpg';
import Fixedincomeresearchcardlist from './fixedincomeresearchcardlist';
import fixedincome from '../../images/heap-of-united-states-dollar-bills-and-calculator-4386393.jpg';
import './research.css';

class FixedIncome extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={fixedincome} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <h1>Fixed Income</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Fixedincomeresearchcardlist />

            </div>
            );
  }
}

export default FixedIncome;