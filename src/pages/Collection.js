import React from 'react'

function Collection() {
    return (
        <div>
                <div className="no-bottom no-top" id="content">
                    <div id="top"></div>
                    
                    {/* <!-- section begin --> */}
                    <section id="profile_banner" aria-label="section" className="text-light" data-bgimage="url(../../assets/images/background/2.jpg) top">
                            
                    </section>
                    {/* <!-- section close --> */}
                    

                    <section aria-label="section" className="d_coll no-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="d_profile">
                                            <div className="profile_avatar">
                                                <div className="d_profile_img">
                                                    <img src="assets/images/author/author-1.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                
                                                <div className="profile_name">
                                                    <h4>
                                                        Abstraction                                                
                                                        <div className="clearfix"></div>
                                                        <span id="wallet" className="profile_wallet">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span>
                                                        <button id="btn_copy" title="Copy Text">Copy</button>
                                                    </h4>
                                                </div>
                                            </div>

                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="de_tab tab_simple">
            
                                        <ul className="de_nav">
                                            <li className="active"><span>On Sale</span></li>
                                            <li><span>Owned</span></li>
                                        </ul>
                                        
                                        <div className="de_tab_content">
                                            
                                            <div className="tab-1">
                                                <div className="row">
                                                        {/* <!-- nft item begin --> */}
                                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                            <div className="nft__item">
                                                                <div className="author_list_pp">
                                                                    <a href="author.html">                                    
                                                                        <img className="lazy" src="assets/images/author/author-1.jpg" alt=""/>
                                                                        <i className="fa fa-check"></i>
                                                                    </a>
                                                                </div>
                                                                <div className="nft__item_wrap">
                                                                    <a href="item-details.html">
                                                                        <img src="assets/images/collections/coll-item-1.jpg" className="lazy nft__item_preview" alt=""/>
                                                                    </a>
                                                                </div>
                                                                <div className="nft__item_info">
                                                                    <a href="item-details.html">
                                                                        <h4>Abstraction #256</h4>
                                                                    </a>
                                                                    <div className="nft__item_price">
                                                                        0.08 ETH<span>1/20</span>
                                                                    </div>
                                                                    <div className="nft__item_action">
                                                                        <a href="#">Place a bid</a>
                                                                    </div>
                                                                    <div className="nft__item_like">
                                                                        <i className="fa fa-heart"></i><span>50</span>
                                                                    </div>                            
                                                                </div> 
                                                            </div>
                                                        </div>                 
                                                    
                                                    
                                                    
                                                    </div>
                                            </div>
                                            
                                        

                                            <div className="tab-3">
                                                <div className="row">
                                                    {/* <!-- nft item begin --> */}
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="nft__item">
                                                            <div className="author_list_pp">
                                                                <a href="author.html">                                    
                                                                    <img className="lazy" src="assets/images/author/author-1.jpg" alt=""/>
                                                                    <i className="fa fa-check"></i>
                                                                </a>
                                                            </div>
                                                            <div className="nft__item_wrap">
                                                                <a href="item-details.html">
                                                                    <img src="assets/images/collections/coll-item-2.jpg" className="lazy nft__item_preview" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="nft__item_info">
                                                                <a href="item-details.html">
                                                                    <h4>The Truth</h4>
                                                                </a>
                                                                <div className="nft__item_price">
                                                                    0.06 ETH<span>1/20</span>
                                                                </div>
                                                                <div className="nft__item_action">
                                                                    <a href="#">Place a bid</a>
                                                                </div>
                                                                <div className="nft__item_like">
                                                                    <i className="fa fa-heart"></i><span>26</span>
                                                                </div>                                 
                                                            </div>
                                                        </div>
                                                    </div>
                                    
                                                
                                                    {/* <!-- nft item begin --> */}
                                                                                            
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    
                </div>    
        </div>
    )
}

export default Collection
