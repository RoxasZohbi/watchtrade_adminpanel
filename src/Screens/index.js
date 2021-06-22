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
import AccountListing from './AccountListing/AccountListing'
import AccountProfile from './AccountProfile/AccountProfile'
import AccountWatchList from './AccountWatchList/AccountWatchList'
import WatchDetailLostAuction from './WatchDetailLostAuction/WatchDetailLostAuction'
import WatchDetailWonAuction from './WatchDetailWonAuction/WatchDetailWonAuction'
import WatchDetailWonAuction1 from './WatchDetailWonAuction1/WatchDetailWonAuction1'
import WatchDetail from './WatchDetail/WatchDetail'

class MainApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Dashboard"
    };

  }

  ChangeView = (viewRequest) => {
    if (viewRequest === "Dashboard") {
      this.setState({ screen: 'Dashboard' });
    }
    if (viewRequest === "About") {
      this.setState({ screen: 'About' });
    }
    if (viewRequest === "Faqs") {
      this.setState({ screen: 'Faqs' });
    }
    if (viewRequest === "ContactUs") {
      this.setState({ screen: 'ContactUs' });
    }
    if (viewRequest === "SellWatch") {
      this.setState({ screen: 'SellWatch' });
    }
    if (viewRequest === "AccountBid") {
      this.setState({ screen: 'AccountBid' });
    }
    if (viewRequest === "AccountListing") {
      this.setState({ screen: 'AccountListing' });
    }
    if (viewRequest === "AccountProfile") {
      this.setState({ screen: 'AccountProfile' });
    }
    if (viewRequest === "AccountWatchList") {
      this.setState({ screen: 'AccountWatchList' });
    }
    if (viewRequest === "WatchDetailLostAuction") {
      this.setState({ screen: 'WatchDetailLostAuction' });
    }
    if (viewRequest === "WatchDetailWonAuction") {
      this.setState({ screen: 'WatchDetailWonAuction' });
    }
    if (viewRequest === "WatchDetailWonAuction1") {
      this.setState({ screen: 'WatchDetailWonAuction1' });
    }
    if (viewRequest === "WatchDetail") {
      this.setState({ screen: 'WatchDetail' });
    }
  }


  render() {
    return (
      <>
        {this.state.screen === "Dashboard" && <Dashboard  ChangeView={this.ChangeView}/>}
        {this.state.screen === "About" && <About ChangeView={this.ChangeView}/>}
        {this.state.screen === "Faqs" && <Faqs ChangeView={this.ChangeView}/>}
        {this.state.screen === "ContactUs" && <ContactUs ChangeView={this.ChangeView}/>}
        {this.state.screen === "SellWatch" && <SellWatch ChangeView={this.ChangeView}/>}
        {this.state.screen === "AccountBid" && <AccountBid ChangeView={this.ChangeView}/>}
        {this.state.screen === "AccountListing" && <AccountListing ChangeView={this.ChangeView}/>}
        {this.state.screen === "AccountProfile" && <AccountProfile ChangeView={this.ChangeView}/>}
        {this.state.screen === "AccountWatchList" && <AccountWatchList ChangeView={this.ChangeView}/>}
        {this.state.screen === "WatchDetailLostAuction" && <WatchDetailLostAuction ChangeView={this.ChangeView}/>}
        {this.state.screen === "WatchDetailWonAuction" && <WatchDetailWonAuction ChangeView={this.ChangeView}/>}
        {this.state.screen === "WatchDetailWonAuction1" && <WatchDetailWonAuction1 ChangeView={this.ChangeView}/>}
        {this.state.screen === "WatchDetail" && <WatchDetail ChangeView={this.ChangeView}/>}

      </>
    );
  }
}

export default MainApplication;
