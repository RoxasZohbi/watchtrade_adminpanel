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
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            liveStatus: 0,
            notLiveStatus: 0
        };
    }
    async componentDidMount() {
        let userDetail = await localForage.getItem('userDetail');
        let details = JSON.parse(userDetail)
        let res = await userBidListing(details._id)

        this.setState({ data: res })
        console.log('==--s>', res);
    }
    render() {
        const secondColumnStart = this.state.data.length / 2;
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
                                <AccountSideBar ChangeView={this.props.ChangeView} watchlist={true} />

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
                                        <li>
                                            <img src={require('../../assets/icons/xd/icons/listing.png')} alt="" />
                                            <a class="ml-20" href="account-listing.html">Listing</a>
                                        </li>
                                        <li class="active">
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
                                                <h3 class="panel-title"><a data-toggle="collapse" data-parent="#faq" href="#my-account-1">Live Auctions <div class="numberCircle">30</div></a> </h3>
                                            </div>
                                            <div id="my-account-1" class="panel-collapse collapse show">
                                                <div class="panel-body">
                                                    <div class="myaccount-info-wrapper">
                                                        {this.state.data.map((value, index) => {

                                                            console.log(index);
                                                            return (
                                                                <div class="row">
                                                                    {(index == 0 || index === secondColumnStart) ?
                                                                        <>
                                                                            <div class="col-xl-5 col-md-5 col-lg-5 col-sm-6">
                                                                                <div>
                                                                                    <h3 class="account-watchlist-div"><a href="#">{value.name}</a></h3>
                                                                                    <img class="flags" src={require('../../assets/flags/de.png')} alt="Germany Flag" />
                                                                                    <p class="account-watchlist-p">{value.name + ' ' + value.brand + ' ' + value.modelNo}</p>
                                                                                </div>

                                                                                <div class="product-wrap mb-25 scroll-zoom">
                                                                                    <div class="product-img">
                                                                                        <a href="#">
                                                                                            <img class="default-img" src={'https://watchtrade-api.herokuapp.com' + value.images[0]} alt="" />
                                                                                            <img class="hover-img" src={'https://watchtrade-api.herokuapp.com' + value.images[1]} alt="" />
                                                                                        </a>
                                                                                        <span class="purple">{`${new Date(value.created_at).getHours()} : ${new Date(value.created_at).getMinutes()} : ${new Date(value.created_at).getMilliseconds()}`}</span>
                                                                                        <div class="product-action">
                                                                                            <div class="pro-same-action pro-wishlist">
                                                                                                <a title="Wishlist" href="wishlist.html"><i class="pe-7s-like"></i></a>
                                                                                            </div>
                                                                                            <div class="pro-same-action pro-cart">
                                                                                                <a title="Add To Cart" href="#"><i class="pe-7s-cart"></i> Add to cart</a>
                                                                                            </div>
                                                                                            <div class="pro-same-action pro-quickview">
                                                                                                <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-content">

                                                                                        <div class="product-price">
                                                                                            <span class="prod-price-watchlist">${value.startingPrice}</span> <span class="price-circle">9</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xl-1 col-md-1 col-lg-1 col-sm-1">
                                                                            </div>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <div class="col-xl-5 col-md-5 col-lg-5 col-sm-6">
                                                                                <div>
                                                                                    <h3 class="account-watchlist-div"><a href="#">{value.name}</a></h3>
                                                                                    <img class="flags" src={require('../../assets/flags/de.png')} alt="Germany Flag" />
                                                                                    <p class="account-watchlist-p">{value.name + ' ' + value.brand + ' ' + value.modelNo}</p>
                                                                                </div>

                                                                                <div class="product-wrap mb-25 scroll-zoom">
                                                                                    <div class="product-img">
                                                                                        <a href="#">
                                                                                            <img class="default-img" src={'https://watchtrade-api.herokuapp.com' + value.images[0]} alt="" />
                                                                                            <img class="hover-img" src={'https://watchtrade-api.herokuapp.com' + value.images[1]} alt="" />
                                                                                        </a>
                                                                                        <span class="purple">{`${new Date(value.created_at).getHours()} : ${new Date(value.created_at).getMinutes()} : ${new Date(value.created_at).getMilliseconds()}`}</span>
                                                                                        <div class="product-action">
                                                                                            <div class="pro-same-action pro-wishlist">
                                                                                                <a title="Wishlist" href="wishlist.html"><i class="pe-7s-like"></i></a>
                                                                                            </div>
                                                                                            <div class="pro-same-action pro-cart">
                                                                                                <a title="Add To Cart" href="#"><i class="pe-7s-cart"></i> Add to cart</a>
                                                                                            </div>
                                                                                            <div class="pro-same-action pro-quickview">
                                                                                                <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><i class="pe-7s-look"></i></a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-content">

                                                                                        <div class="product-price">
                                                                                            <span class="prod-price-watchlist">${value.startingPrice}</span> <span class="price-circle">9</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-xl-1 col-md-1 col-lg-1 col-sm-1">
                                                                            </div>
                                                                        </>
                                                                    }
                                                                </div>
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

export default Dashboard;
