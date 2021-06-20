import React, { Component, lazy } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Dashboard extends Component {

  render() {
    return (
      <>
        <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix">
          <div class="container-fluid">
            <div class="container">
              <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-4 col-4">
                  <div class="logo">
                    <a href="index.html">
                        <h5 class="logo-heading">WatchTrade</h5>
                        </a>
                    </div>
                  </div>
                  <div class="col-xl-10 col-lg-10 d-none d-lg-block">
                    <div class="main-menu">
                      <nav>
                        <ul>
                          <li><a href="#"> Auctions </a></li>
                          <li><a href="#"> Sell Now </a></li>
                          <li><a href="#"> Register </a></li>
                          <li><a href="#" data-toggle="modal" data-target="#loginModal"> Login </a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="mobile-menu-area">
                  <div class="mobile-menu">
                    <nav id="mobile-menu-active">
                      <ul class="menu-overflow">
                        <li><a href="#"> Auctions </a></li>
                        <li><a href="#"> Sell Now </a></li>
                        <li><a href="#"> Register </a></li>
                        <li><a href="#"> Login </a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

            </div>
</header>

          <div class="container-fluid" style="background-image: url(assets/images/xd/about-banner.png);height: 500px;background-size: cover;">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center mt-200">
                  <h2 style="color: white;">Who we are?</h2>
                  <p style="color: white;width: 600px;margin: auto;">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 about-box-1">
                <h2>The Service</h2>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
              </div>
              <div class="col-md-6 about-div-1">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 about-div-2">
              </div>
              <div class="col-md-6 about-box-1">
                <h2>The Service</h2>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 about-div-3">
                <div class="container mt-200">
                  <div class="row">
                    <div class="col-md-4">
                      <h2 style="color: white;">Do you have questions to ask? Message us!</h2>
                      <input class="acc-profile-btn-one" type="button" value="Contact Us" style="border: none;width: 150px;"/>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-50 mb-30">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p style="font-size: 22px;" class="mt-10">Follow us on socialmedia</p>
                    </div>
                    <div class="col-md-6" style="justify-content: flex-end;display: flex;">
                      <ul style="display: flex;">
                        <li>
                          {/* <a href=""><img src="assets/images/xd/icons/insta.png" alt=""></a> */}
                        </li>
                          <li>
                            {/* <a href=""><img src="assets/images/xd/icons/twitter.png" alt=""></a> */}
                        </li>
                            <li>
                              {/* <a href=""><img src="assets/images/xd/icons/linkedin.png" alt=""></a> */}
                        </li>
                              <li>
                                {/* <a href=""><img src="assets/images/xd/icons/fb.png" alt=""></a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
                      <div class="row">
                        <div class="col-md-12 heroSlider-fixed pl-0 pr-0">
                          <div class="overlay">
                          </div>
                          <div class="slider responsive">
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-1/1.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-1/2.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-1/3.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-1/4.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-1/5.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-1/6.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-1/7.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                          </div>
                       
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 heroSlider-fixed pl-0 pr-0">
                          <div class="overlay">
                          </div>
                          <div class="slider responsive">
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/1.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/2.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/3.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/4.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/5.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/6.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/7.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                            <div class="imgs">
                              <img src="assets/images/xd/about/slider-2/8.png" alt="" style="width:100%;" />
                              <div class="overlay">
                                <div class="text">Hello World</div>
                              </div>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    </div>


                    <footer class="footer-area bg-gray">
                      <div class="container-fluid" style="background: #2e2e2e;">
                        <div class="container pt-100 pb-40">
                          <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-3">
                              <div class="copyright mb-30 ">
                                <div class="footer-logo">
                                  <a href="index.html">
                                      <h5 class="logo-heading" style="font-size: 32px;
                                opacity: 0.45;">WatchTrade</h5>
                            </a>
                        </div>
                                  <p style="padding-top: 60px;">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="footer-widget mb-30 " style="text-align: center;">
                                  <div class="footer-title">
                                    <h3>Auctions</h3>
                                  </div>
                                  <div class="footer-list" style="padding-top: 50px;">
                                    <ul>
                                      <li><a href="#">Live Auctions</a></li>
                                      <li><a href="#">Coming Soon</a></li>
                                      <li><a href="#">Recently Sold</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="footer-widget mb-30 ml-30">
                                  <div class="footer-title">
                                    <h3>Company</h3>
                                  </div>
                                  <div class="footer-list" style="padding-top: 50px;">
                                    <ul>
                                      <li><a href="#">Privacy Policy</a></li>
                                      <li><a href="#">Terms & Conditions</a></li>
                                      <li><a href="#">Cookie Policy</a></li>
                                      <li><a href="#">Contact us</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-3">
                                <div class="footer-widget mb-30 ">
                                  <div class="footer-title">
                                    <h3>Sell with WatchTrade</h3>
                                  </div>
                                  <div class="footer-list" style="padding-top: 50px;">
                                    <ul>
                                      <li><a href="#">Sell Now</a></li>
                                      <li><a href="#">About Watch Trade</a></li>
                                      <li><a href="#">Sell Now</a></li>
                                      <li><a href="#">FAQ's</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container-fluid" style="background: #0692FF;height: 86px;display: flex;">
                          <div class="container" style="margin: auto;">
                            <div class="row">
                              <div class="col-md-4">
                                <p style="font-size: 16px;color: white;">WatchTrade © 2021</p>
                              </div>
                              <div class="col-md-8">
                                <div>
                                  <ul style="display: flex;" class="last-footer">
                                    <li><a href="#">English (UK)</a></li>
                                    <li><a href="#">ภาษาไทย</a></li>
                                    <li><a href="#">中文(简体)</a></li>
                                    <li><a href="#">한국어</a></li>
                                    <li><a href="#">日本語</a></li>
                                    <li><a href="#">Français (France)</a></li>
                                    <li><a href="#">Español</a></li>
                                    <li><a href="#">Deutsch</a></li>
                                    <li><a href="#">Italiano</a></li>
                                    <li><a href="#">Português (Brasil)</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
</footer>
      </>
                    );
  }
}

                    export default Dashboard;
