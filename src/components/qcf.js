import React, {Component} from 'react';
import q from '../images/q.png';
import qcf from '../images/qcf.png';
import qcf_logo from '../images/GT_QCF_Logo.png';

class QCF extends Component{
    render(){
    	return(
    	<div className = "qcf">	
				<div >
					<a target="_blank" href = "https://www.scheller.gatech.edu/degree-programs/interdisciplinary-ms/quantitative-and-computational-finance/index.html">
						<img height = '326px' src="https://www2.deloitte.com/content/dam/Deloitte/lu/Images/header_images/lu-quant-master-class-2019-4x1.jpg/_jcr_content/renditions/cq5dam.web.768.192.mobile.jpeg" alt="Nature" style={{width:'100%'}} />
						<div class="text-block-qcf">
							<img src = {qcf_logo}></img>	
						</div>
					</a>
                </div>

				<br/>
				
   				<div class="row text-center">
      				<div class="col-xs-6 col-sm-3">
              				<div class="image-wrapper float-left pr-3">
                  				<img alt = "" class="img-fluid" src={q} />
              				</div>
      				</div>

      				<div class="col-xs-6 col-sm-6">
       				 	<div class="row">
           				 		<div class="single-post-content-wrapper p-3">
              							<h3><a target="_blank" href = "https://www.scheller.gatech.edu/degree-programs/interdisciplinary-ms/quantitative-and-computational-finance/index.html" 
              							target = "_blank">MASTER OF SCIENCE IN QUANTITATIVE AND COMPUTATIONAL FINANCE</a></h3>
               							<p align = "justify">
											The Master of Science degree program in Quantitative and Computational Finance (QCF) is 
											interdisciplinary between three of Georgia Tech's most prestigious units:   
											the <a href = "https://www.scheller.gatech.edu/index.html" target="_blank"> Scheller College of Business</a>
											, the <a href = "https://isye.gatech.edu/" target="_blank"> H. Milton Stewart School of Industrial & Systems Engineering</a>  
											, and the <a href = "https://math.gatech.edu/" target="_blank"> School of Mathematics</a>.
											The main objective of the Master of Science degree program in Quantitative and 
											Computational Finance at Georgia Tech is to provide students with the practical skills and theoretical 
											understanding they need to be leaders in the formulation, implementation and evaluation of the models 
											used by the financial sector to structure transactions, manage risk and construct investment strategies.
              							</p>
           						</div>
         				</div> 
      				</div>

      				<div class="col-xs-6 col-sm-3">
              			<div class="image-wrapper float-left pr-3">
                  			<img alt = "" class="img-fluid" src={qcf}></img>
              			</div>
      				</div>
  				</div>
    	</div>
    	);
    }
}

export default QCF;
