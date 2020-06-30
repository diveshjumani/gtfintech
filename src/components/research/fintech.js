import React, { Component } from 'react';
import { animateScroll as scroll} from 'react-scroll'
import Fintechresearchcardlist from './fintechresearchcardlist';
import fintech from '../../images/blue-and-yellow-graph-on-stock-market-monitor-159888.jpg';
import './research.css';

class FinTech extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={fintech} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">	
                        <h1>FinTech</h1>
                        <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Fintechresearchcardlist />

            </div>
            );
  }
}

export default FinTech;