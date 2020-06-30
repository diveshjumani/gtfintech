import React, { Component } from 'react';
import { animateScroll as scroll} from 'react-scroll'
import NLPresearchcardlist from './NLPresearchcardlist';
import NLPimage from '../../images/finance-news-newspaper-stocks-102720.jpg';
import './research.css';

class NLPandFinance extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img class = "image-research" src={NLPimage} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">	
                        <h1>Natural Language Processing</h1>
                    </div>
                </div>

                <br/>

                <NLPresearchcardlist />

            </div>
            );
  }
}

export default NLPandFinance;