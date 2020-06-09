import React, {Component} from 'react';
import q from '../images/q.png';
import qcf from '../images/qcf.png';
import qcf_logo from '../images/GT_QCF_Logo.png';
import { Container } from 'react-bootstrap';

class QCF extends Component{
    render(){
    	return(
    	<div className = "qcf">	
				<div >
					<a target="_blank" href = "https://www.scheller.gatech.edu/degree-programs/interdisciplinary-ms/quantitative-and-computational-finance/index.html">
						<img height = '422px' src="https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/spread--tojpeg_1466430752374_x1.jpg" alt="Nature" style={{width:'100%'}} />
						<div class="text-block-qcf">
							<img className="CL_qcf_logo" src = {qcf_logo}></img>	
						</div>
					</a>
                </div>

				<Container fluid>
   				<div class="row text-center">
      				<div class="col-xs-6 col-sm-12">
       				 	<div class="row">
           				 		<div class="single-post-content-wrapper p-3">
              							<h3><a target="_blank" href = "https://www.scheller.gatech.edu/degree-programs/interdisciplinary-ms/quantitative-and-computational-finance/index.html" 
              							target = "_blank">MASTER OF SCIENCE IN QUANTITATIVE AND COMPUTATIONAL FINANCE</a></h3>
               							<p className="CL_QCF_text" align = "justify">
											The Master of Science degree program in Quantitative and Computational Finance (QCF) is 
											interdisciplinary between three of Georgia Tech's most prestigious units:   
											the Scheller College of Business, the H. Milton Stewart School of Industrial & Systems Engineering  
											, and the School of Mathematics.
											The main objective of the Master of Science degree program in Quantitative and 
											Computational Finance at Georgia Tech is to provide students with the practical skills and theoretical 
											understanding they need to be leaders in the formulation, implementation and evaluation of the models 
											used by the financial sector to structure transactions, manage risk and construct investment strategies.
              							</p>
           						</div>
         				</div> 
      				</div>
  				</div>
				  </Container>
    	</div>
    	);
    }
}

export default QCF;
