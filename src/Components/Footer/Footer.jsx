import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer>
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="right">
                    
                    <div className="glowcards-container">
                        <div className="container">
                          <Link to='#'>
                            <div className="card">
                              <div className="face face1">
                                <div className="content">
                                   <i className="fa-brands fa-react"></i>            
                                  <h3>درباره ما</h3>
                                </div>
                              </div>
                            </div>
                           </Link>
                           <Link to="#">
                           <div className="card">
                              <div className="face face1">
                                <div className="content">
                             <i className="fab fa-android"></i>
                             <i className="fab fa-apple"></i>
                             <i className="fab fa-windows"></i>       
                             <h3>دانلود برنامه های ما</h3>
                                </div>
                              </div>
                           </div>
                           </Link>
                         </div>
                        </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="left">
                    <div className="title">
                        ما را در شبکه های اجتماعی دنبال کنید
                    </div>
                    <div className="socialcards-container">
                        <div className="container">
                            <Link to='#'>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link to='#'>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <Link to='#'>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <i className="fa-brands fa-telegram"></i>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            کلیه حقوق محفوظ می باشد 2020 ©
        </div>
    </footer>
     );
}
 
export default Footer;