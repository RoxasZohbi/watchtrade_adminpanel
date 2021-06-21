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
import About from './About/About'

class MainApplication extends Component {
  render() {
    return (
      <>
      {/* <Dashboard/> */}
      <About/>
      </>
    );
  }
}

export default MainApplication;