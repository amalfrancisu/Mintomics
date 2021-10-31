import React from 'react'
// import User from './User'
import * as fcl from '@onflow/fcl';
import User from './User';

function Header() {
    return (
        <div>
                    <header className="transparent">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="de-flex sm-pt10">
                                    <div className="de-flex-col">
                                        <div className="de-flex-col">
                                            {/* <!-- logo begin --> */}
                                            <div id="logo">
                                                <a href="/">
                                                    <img alt="" className="logo logo1" src="../../../assets/images/logox.png" />
                                                </a>
                                            </div>
                                            {/* <!-- logo close --> */}
                                        </div>
                                        <div className="de-flex-col">
                                            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                                        </div>
                                    </div>
                                    <div className="de-flex-col header-col-mid">
                                        {/* <!-- mainmenu begin --> */}
                                        <ul id="mainmenu">
                                            
                                            <li>
                                                <a href="/create">Create<span></span></a>
                                            </li>
                                                                            
                                            {/* <li>
                                                <a href="/collection">Profile<span></span></a>
                                            </li> */}
                                        
                                        </ul>

                                        <User />

                                        {/* <div className="menu_side_area">
                                            <button className="btn-main"><span>Sign In</span></button>
                                            <span id="menu-btn"></span>
                                        </div> */}
                                    
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </header> 

        </div>
    )
}

export default Header
