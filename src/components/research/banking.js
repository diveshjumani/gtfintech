import React, { Component } from 'react';
import { animateScroll as scroll} from 'react-scroll'
import Bankingresearchcardlist from './bankingresearchcardlist';
import bank from '../../images/safe-913452.jpg';
import './research.css';

class Banking extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div>
                <div >
                <br/>
                <br/>
                    <img class = "image-research"  src={bank} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">	
                    <h1>Banking</h1>
                    <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Fames mollis dictum convallis nisl iaculis dapibus. </p>
                    </div>
                </div>

                <br/>

                <Bankingresearchcardlist />
                
            </div>
            );
  }
}

export default Banking;