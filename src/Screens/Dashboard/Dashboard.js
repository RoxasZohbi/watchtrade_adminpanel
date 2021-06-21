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
import './style.css'

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
        <div class="slider-area">
          <div class="slider-active owl-carousel nav-style-1">
            <div class="single-slider slider-height-1 bg-purple">
              <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12">
                    <h1 class="title-heading">But I must explain to you how all this mistaken idea.</h1>
                    <div class="form-group has-search index-form-group">
                      <span class="fa fa-search form-control-feedback"></span>
                      <input type="text" class="form-control" placeholder="Search" />
                      <button class="srch-btn">Search</button>
                      <a class="filter" href="#">Filter</a>
                      <i class="fa fa-filter" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container index-pro-con">
          <div class="product-tab-list nav pt-30 pb-55 text-center">
            <a class="active" href="#product-1" data-toggle="tab">
              <h4 class="index-new-arrivals">New Arrivals </h4>
            </a>
          </div>
          <div class="tab-content jump">
            <div class="tab-pane active" id="product-1">
              <div class="row">
                <div class="col-md-6 mb-20">
                  <i class="fab fa-hotjar"></i>
                  <h3 class="index-hot-auction">Hot Auctions</h3>
                </div>
                <div class="col-md-6 top-nav mb-20 text-right">
                  <h6 class="watch-auction-h6">84 Watch Auctions</h6>
                  <select name="WatchAction" id="WatchAction" class="watchaction">
                    <option value="#">Live</option>
                    <option value="#">Live</option>
                    <option value="#">Live</option>
                  </select>
                </div>
                <div class="col-xl-3 col-md-3 col-lg-3 col-sm-6">
                  <div>
                    <h3 class="index-title"><a href="#">Breguet</a></h3>
                    <img class="flags" src={require('../../assets/flags/de.png')} alt="Germany Flag" />
                    <p class="mb-10 index-title-p">Sphere Bassilica - Gray 2A7865</p>
                  </div>
                  <div class="product-wrap mb-25 scroll-zoom">
                    <div class="product-img">
                      <a href="#">
                        <img class="default-img" src={require('../../assets/icons/xd/watches/watch-1.jpg')} alt="" />
                        <img class="hover-img" src={require('../../assets/icons/xd/watches/watch-1a.jpg')} alt="" />
                      </a>
                      <span class="pink">01:16:48</span>
                      <div class="product-action">
                        <div class="pro-same-action pro-wishlist">
                          <a title="Wishlist" href="wishlist.html"><i class="pe-7s-like"></i></a>
                        </div>
                        <div class="pro-same-action pro-cart">
                          <a title="Add To Cart" href="#"><i class="pe-7s-cart"></i> Add to cart</a>
                        </div>
                        <div class="pro-same-action pro-quickview">
                          <a title="Quick View" href="#" data-toggle="modal"
                            data-target="#exampleModal"><i class="pe-7s-look"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="product-content">
                      <div class="product-price">
                        <span>$ 60.00</span> <span class="price-circle">45</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="blog-area ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 foot-img text-center">
                <div class="text-center m-auto index-blog">
                  <h2 class="white">Subscribe to our Newsletter</h2>
                  <p class="white">But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born.</p>
                  <form action="#" class="form-control index-blog-form">
                    <input type="text" name="foot" id="foot" placeholder="Email Address" />
                    <input type="submit" value="Subscribe Now" class="btn btn-primary index-blog-input" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer-area bg-gray">
          <div class="container-fluid footer-cont">
            <div class="container pt-100 pb-40">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="copyright mb-30 ">
                    <div class="footer-logo">
                      <a href="index.html">
                        <h5 class="logo-heading footer-logo-heading">WatchTrade</h5>
                      </a>
                    </div>
                    <p class="pt-60">But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will give you a complete account of
                      the system, and expound the actual teachings of the great explorer of the truth.</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3">
                  <div class="footer-widget mb-30 text-center">
                    <div class="footer-title">
                      <h3>Auctions</h3>
                    </div>
                    <div class="footer-list pt-50">
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
                    <div class="footer-list pt-50">
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
                    <div class="footer-list pt-50">
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
          <div class="container-fluid footer-end-cont">
            <div class="container m-auto">
              <div class="row">
                <div class="col-md-4">
                  <p class="white footer-end-p">WatchTrade © 2021</p>
                </div>
                <div class="col-md-8">
                  <div>
                    <ul class="last-footer footer-end-ul">
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
