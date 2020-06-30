import React, { Component } from 'react';
import { animateScroll as scroll} from 'react-scroll'
import about_3 from '../../images/about_3.jpg';
import COVIDresearchcardlist from './covidresearchcardlist';
import './research.css';

class COVID extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <br/>
                <br/>
                <div >
                    <img  class = "image-research" src={about_3} alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <h1>COVID-19</h1>
               <p align = "justify"> The COVID-19 pandemic and subsequent economic shutdown  have wreaked havoc on global economies. A group of Georgia Tech students and faculty assisted by the Financial Services Innovation Lab at Georgia Tech and sponsored by the Speedwell Foundation, have created a <a href="https://gacovid19.org/">web site</a> to document the far-ranging effects of the virus on the health and well being of the statewide economy and its residents.  </p>
                    </div>
                </div>

                <br/>

                <COVIDresearchcardlist />

            </div>
            );
  }
}

export default COVID;
