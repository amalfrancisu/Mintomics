import React from 'react'

function Home() {
    return (
        <div>
                <div id="wrapper">

                {/* <!-- header close --> */}
                {/* <!-- content begin --> */}
                <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                {/* <!-- section begin --> */}
                <section id="section-hero" aria-label="section" className="text-light overflow-hidden" style={{backgroundColor : "black"}} data-bgimage="url(assets/images/background/2.jpg) top">
                    <div id="particles-js"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="text_top">
                                    <div className="spacer-double"></div>
                                    <h1>Read and own your favourite comics.</h1>
                                    <p className="lead">Easiest place to create and mint comics.<br/>Sign up and get started today.</p>
                                    <div className="spacer-20"></div>
                                    <a href="#" className="btn-main">Explore</a>&nbsp;&nbsp;
                                    <a href="/create" className="btn-main btn-white">Create</a>
                                    <div className="spacer-double"></div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </section>
                {/* <!-- section close --> */}

                <section id="section-nfts">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2>Popular Comics</h2>
                                    <div className="small-border bg-color-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row fadeIn">                        
                            {/* <!-- nft item begin --> */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    
                                <div className="nft__item">
                                    <a href="Hackathon_Journey.pdf">
                                    <div className="author_list_pp">
                                        <a href="#">                                    
                                            <img className="lazy" src="assets/images/author/melwin.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="Hackathon_Journey.pdf">
                                            <img src="assets/images/items/frame1.jpg" className="lazy nft__item_preview" alt=""/>
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="/create">
                                            <h4>Hackathon Journey</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            Number of pages : 23
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Mint</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart"></i><span>50</span>
                                        </div>                            
                                    </div> 

                                    </a>
                                </div>
                            </div>                 



                        
                        
                {/* 
                            <!-- <div className="col-md-12 text-center">
                                <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">Load more</a>
                            </div>                                               --> */}
                        </div>
                    </div>
                </section>




                <section id="section-steps" data-bgcolor="#F7F4FD">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2>Create and Mint your Comics</h2>
                                    <div className="small-border bg-color-2"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-sm-30">
                                <div className="feature-box f-boxed style-3">
                                    <i className=" fadeInUp bg-color-2 i-boxed icon_book"></i>
                                    <div className="text">
                                        <h4 className=" fadeInUp">Read Comic</h4>
                                        <p className=" fadeInUp" data-wow-delay=".25s">Read your favourite Comic right here! Once you like the comic you could own the comic.</p>
                                    </div>
                                    <i className="wm icon_book"></i>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-sm-30">
                                <div className="feature-box f-boxed style-3">
                                    <i className=" fadeInUp bg-color-2 i-boxed icon_pencil"></i>
                                    <div className="text">
                                        <h4 className=" fadeInUp">Create Comic</h4>
                                        <p className=" fadeInUp" data-wow-delay=".25s">As an artist, Mintomics gives you infinite opportunites to create your own comic.</p>
                                    </div>
                                    <i className="wm icon_pencil"></i>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-sm-30">
                                <div className="feature-box f-boxed style-3">
                                    <i className="fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>
                                    <div className="text">
                                        <h4 className="fadeInUp">Mint Comic</h4>
                                        <p className="fadeInUp" data-wow-delay=".25s">Mint the comic you created. Once minted, this comic could later be sold and bought by people.</p>
                                    </div>
                                    <i className="wm icon_tags_alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>




                </div>            
        </div>
    )
}

export default Home
