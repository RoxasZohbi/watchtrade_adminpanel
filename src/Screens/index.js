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
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Dashboard from './Dashboard/Dashboard'
import Faqs from './FAQs/Faqs'
import About from './About/About'
import ContactUs from './Contact/ContactUs'
import NoWatchState from './NoWatchState/NoWatchState'
import SellWatch from './SellWatch/SellWatch'
import AccountBid from './AccountBid/AccountBid'
import AccountBilling from './AccountBilling/AccountBilling'

class MainApplication extends Component {
  render() {
    return (
      <>
      {/* <Dashboard/> */}
      {/* <About/> */}
      {/* <Faqs/> */}
      {/* <ContactUs/> */}
      {/* <SellWatch/> */}
      {/* <AccountBid/> */}
      <AccountBilling/>
      </>
    );
  }
}

export default MainApplication;
