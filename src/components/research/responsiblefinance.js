import React, { Component } from 'react';
import {Card, Container,Row,Col,Carousel} from 'react-bootstrap';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_12 from '../../images/Nikhil_12.jpg';
import Nikhil_13 from '../../images/Nikhil_13.jpg';
import ResponsibleFinanceresearchcardlist from './responsiblefinanceresearchcardlist';
import responsible_finance from '../../images/micheile-henderson-SoT4-mZhyhE-unsplash.jpg';
import './research.css';

class ResponsibleFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={responsible_finance} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <h1>Responsible Finance</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <ResponsibleFinanceresearchcardlist />

            </div>
            );
  }
}

export default ResponsibleFinance;