import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';

class QCF extends Component{
    render(){
    	return(
    	<div>
			<Card className="research bg-dark text-white">
                <Card.Img fluid src="https://pbs.twimg.com/media/Ct8sxeDWAAASWAG.jpg" alt="Card image" />
            </Card> 
			<br/>
   			<div class="row text-center">
      				<div class="col-xs-6 col-sm-3">
              				<div class="image-wrapper float-left pr-3">
                  				<img alt = "" class="img-fluid" src={'http://www.prism.gatech.edu/~schava6/assets/img/QuantnetTop10.png'} />
              				</div>
      				</div>
      				<div class="col-xs-6 col-sm-6">
       				 	<div class="row">
           				 		<div class="single-post-content-wrapper p-3">
              							<h3><a href = "https://www.scheller.gatech.edu/degree-programs/interdisciplinary-ms/quantitative-and-computational-finance/index.html" 
              							target = "_blank">MASTERS IN QUANTITATIVE AND COMPUTATIONAL FINANCE</a></h3>
               							<p>The main objective of the Master of Science degree program in Quantitative and 
                						Computational Finance at Georgia Tech is to provide students with the practical skills and theoretical 
                						understanding they need to be leaders in the formulation, implementation and evaluation of the models 
                						used by the financial sector to structure transactions, manage risk and construct investment strategies.
              							</p>
           						 </div>
         				 </div> 
      				</div>
      				<div class="col-xs-6 col-sm-3">
              			<div class="image-wrapper float-left pr-3">
                  			<img alt = "" class="img-fluid" src={"http://www.prism.gatech.edu/~schava6/assets/img/FETop10.png"}></img>
              			</div>
      				</div>
  			</div>
    	</div>
    	);
    }
}

export default QCF;
