import React, {Component} from 'react';
import logo from '../images/GeorgiaTechLogo-RGB-Gray.png';

class Footer extends Component{
    render(){
        return (
            <div id="footer">
                <div id="footer-logo">
                
                    <a href="http://www.gatech.edu/">
                        <img alt="Georgia Tech" width="130" height="40" src={logo} />
                    </a>
                    <h6 id="inst">&copy; Georgia Institute of Technology</h6>
                </div>

                <div id="footer-links">
                    <br>
                    </br>
                    <p id="links">
                        <a href="https://www.gatech.edu/emergency/">Emergency Information  </a>
                        <a href="https://www.gatech.edu/privacy">Privacy & Legal Notice  </a>
                        <a href="https://www.gatech.edu/accessibility">Accessibility  </a>
                        <a href="https://www.gatech.edu/accountability">Accountability  </a>
                        <a href="https://www.scheller.gatech.edu/contact-us.html">Contact Us  </a>
                    </p>    
                </div>
            </div>
        );
    }
}

export default Footer;  