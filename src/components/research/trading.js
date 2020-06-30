import React, { Component } from 'react';
import { animateScroll as scroll} from 'react-scroll'
import Tradingresearchcardlist from './tradingresearchcardlist';
import trading from '../../images/black-blue-and-red-graph-illustration-186461.jpg';
import './research.css';

class Trading extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={trading} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">	
                        <h1>Trading Strategies</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                    <Tradingresearchcardlist />
                    
            </div>
            );
  }
}

export default Trading;