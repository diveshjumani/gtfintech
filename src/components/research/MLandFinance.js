import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_12 from '../../images/Nikhil_12.jpg';
import Nikhil_13 from '../../images/Nikhil_13.jpg';
import MLresearchcardlist from './MLresearchcardlist';
import machine_learning from '../../images/artificial-intelligence-3382507_1920.jpg';
import './research.css';

class MLandFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={machine_learning} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">	
                        <h1>Machine Learning</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <MLresearchcardlist />

            </div>
            );
  }
}

export default MLandFinance;