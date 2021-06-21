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
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="slider-area">
          <div class="slider-active owl-carousel nav-style-1">
            <div class="single-slider slider-height-1 bg-purple">
              <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12">
                    <h1 class="title-heading">But I must explain to you how all this mistaken idea.</h1>
                    <div class="form-group has-search" style="padding: 20px;
                    background: white;width: 70%;margin: auto;">
                      <span class="fa fa-search form-control-feedback"></span>
                      <input type="text" class="form-control" placeholder="Search"/>
                        <button class="srch-btn">Search</button>
                        <a class="filter" href="#">Filter</a>
                        <i class="fa fa-filter" aria-hidden="true"></i>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

      </>
    );
  }
}

export default Dashboard;
