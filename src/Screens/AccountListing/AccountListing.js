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
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import localForage from 'localforage';
import AccountSideBar from '../../Component/AccountSideBar'
import { userBidListing } from '../../Controllers/UserBidPanel'

class AccountListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            liveStatus:0,
            notLiveStatus:0
        };
    }
    async componentDidMount() {
        let userDetail = await localForage.getItem('userDetail');
        let details = JSON.parse(userDetail)
        let res = await userBidListing(details._id)
        let liveStatus =  res.filter((value)=>value.status === 'live')
        let notLiveStatus =  res.filter((value)=>value.status !== 'live')
        
        this.setState({ data: res,liveStatus:liveStatus.length,notLiveStatus:notLiveStatus.length })
        console.log('==--s>', res);
    }


    render() {
        return (
            <>
                <Header ChangeView={this.props.ChangeView} toggleLogin={this.props.toggleLogin} />
                <div class="container-fluid pt-100 bg-all">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 text-center">
                                <div class="account-bid">
                                    <img src={require('../../assets/icons/xd/profile/profile-1.png')} alt="Profile" class="main-profile-img account-bid-img" />
                                    <a href="#" class="account-bid-a"><img src={require('../../assets/icons/xd/icons/pen-01.png')} alt="edit-img" /></a>
                                </div>

                                <h2 class="mt-25 account-bid-h2">@marcussmith</h2>
                                <h6 class="fs-16">Marcus Smith</h6>
                                <AccountSideBar ChangeView={this.props.ChangeView} listing={true} />

                                {/* <div class="mt-40">
                                    <ul class="side-nav">
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/profile.png')} alt="" />
                                            <a class="ml-20" href="account-profile.html">Profile</a>
                                        </li>
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/billing.png')} alt="" />
                                            <a class="ml-20" href="account-billing.html">Billing</a>
                                        </li>
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/bids.png')} alt="" />
                                            <a class="ml-20" href="account-bids.html">Bids</a>
                                        </li>
                                        <li class="active">
                                            <img src={require('../../assets/icons/xd/icons/listing.png')} alt="" />
                                            <a class="ml-20" href="account-listing.html">Listing</a>
                                        </li>
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/watchlist.png')} alt="" />
                                            <a class="ml-20" href="account-watchlist.html">Watchlist</a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div class="text-left mb-20">
                                    <button class="logout-btn"><img class="m-right-5" src={require('../../assets/icons/xd/icons/leave.png')} alt="" /> Logout</button>
                                </div>

                            </div>
                            <div class="ml-auto mr-auto col-lg-9">
                                <div class="checkout-wrapper">
                                    <div id="faq" class="panel-group">
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-1">My Live Listings <div class="numberCircle">{this.state.liveStatus}</div></a> </h3>
                                            </div>
                                            <div id="my-account-1" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        {this.state.data.map((value) => {
                                                            return (
                                                                value.status === 'live' ?
                                                                    <>
                                                                        <div class="row">
                                                                            <div class="col-lg-3 col-lg-3">
                                                                                <img src={'https://watchtrade-api.herokuapp.com'+value.images[0]} alt="" class="wd-100" />
                                                                            </div>
                                                                            <div class="col-lg-5 col-lg-5">
                                                                                <div>
                                                                                    <h2 class="acc-bid-h2">{value.name}</h2>
                                                                                    <img class="flags2" src={require('../../assets/flags/de.png')} alt="Germany Flag" />
                                                                                </div>
                                                                                {/* <p class="wd-75">Caslito Chronometer Belgium Stone 23SJF65</p> */}
                                                                                <p class="wd-75">{value.name + ' ' + value.brand + ' ' + value.modelNo}</p>
                                                                            </div>
                                                                            <div class="col-lg-2 col-lg-2 acc-bid-div">
                                                                                <h2 class="fs-22">${value.startingPrice}</h2>
                                                                                <p>7 hours ago</p>
                                                                            </div>
                                                                            <div class="col-lg-2 col-lg-2 text-center">
                                                                                {/* <h2 class="fs-22">{new Date(value.created_at).getHours() + ':' + new Date(value.created_at).getMinutes() + '+' + new Date(value.created_at).getMilliseconds()}</h2> */}
                                                                                <h2 class="fs-22">{`${new Date(value.auctionExpireAt).getHours()} : ${new Date(value.auctionExpireAt).getMinutes()} : ${new Date(value.auctionExpireAt).getMilliseconds()}`}</h2>
                                                                                <p>Time Left</p>
                                                                            </div>
                                                                        </div>
                                                                        <hr />
                                                                    </> :
                                                                    null
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default single-my-account">
                                            <div class="panel-heading my-account-title">
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-2">My Close Listings <div class="numberCircle">{this.state.notLiveStatus}</div></a></h3>
                                            </div>
                                            <div id="my-account-2" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        {this.state.data.map((value) => {
                                                            return (
                                                                value.status !== 'live' ?
                                                                    <>
                                                                        <div class="row">
                                                                            <div class="col-lg-3 col-lg-3">
                                                                                <img src={'https://watchtrade-api.herokuapp.com'+value.images[0]} alt="" class="wd-100" />
                                                                            </div>
                                                                            <div class="col-lg-7 col-lg-7">
                                                                                <div>
                                                                                    <h2 class="acc-bid-h2">{value.name}</h2>
                                                                                    <img class="flags2" src={require('../../assets/flags/us.png')} alt="USA Flag" />
                                                                                </div>
                                                                                <p class="wd-75">{value.name + ' ' + value.brand + ' ' + value.modelNo}</p>
                                                                            </div>
                                                                            <div class="col-lg-2 col-lg-2 text-right">
                                                                                <h2 class="fs-22">${value.startingPrice}</h2>
                                                                                <p>Sold Price</p>
                                                                            </div>
                                                                        </div>
                                                                        <hr />
                                                                    </>
                                                                    : null
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer ChangeView={this.props.ChangeView} />
            </>
        );
    }
}

export default AccountListing;
