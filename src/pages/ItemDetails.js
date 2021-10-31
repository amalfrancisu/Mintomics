import React from 'react'

function ItemDetails() {
    return (
        <div>
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            
            <section id="subheader" className="text-light" data-bgimage="url(assets/images/background/subheader.jpg) top">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-12 text-center">
                                <h1>Series Info</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section aria-label="section">
                <div className="container">
					<div className="row">
					    <div className="col-md-3 text-center">
                            <img src="assets/images/items/big-1.jpg" className="img-fluid img-rounded mb-sm-30" alt=""/>
                        </div>
                        <div className="col-md-1 text-center"></div>
                        <div className="col-md-8">
                            <div className="item_info">
                                <h2>Series Name</h2>
                                
                                <div className="item_info_counts">
                                    <div className="item_info_views">Total mints : 67</div>
                                </div>
                                <h6>Creator</h6>
                                <div className="item_author">                                    
                                    <div className="author_list_pp">
                                        <a href="author.html">
                                            <img className="lazy" src="assets/images/author/author-1.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </a>
                                    </div>                                    
                                    <div className="author_list_info">
                                        <a href="author.html">Monica Lucas</a>
                                    </div>
                                </div>
                                <br/>
                                <h4>Genre Superhero</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>



                                <div className="spacer-40"></div>

                                <div className="de_tab tab_simple">

                                <h3>Episodes</h3>

                                <div className="p_list">
                                    <div className="p_list_pp">
                                        <a href="author.html">
                                            <img className="lazy" src="assets/images/author/author-2.jpg" alt=""/>
                                        </a>
                                    </div>                                    
                                    <div className="p_list_info">
                                        <b>Episode 1 </b> Mint Price : 2, Max Supply : 100, Total minted : 32
                                        <button className="btn btn-dark" style={{float: "right"}}>Mint</button>
                                    </div>
                                </div>

                                <div className="p_list">
                                    <div className="p_list_pp">
                                        <a href="author.html">
                                            <img className="lazy" src="assets/images/author/author-2.jpg" alt=""/>
                                        </a>
                                    </div>                                    
                                    <div className="p_list_info">
                                        <b>Episode 2</b> Mint Price : 2, Max Supply : 50, Total minted : 22
                                        <button className="btn btn-dark" style={{float: "right"}}>Mint</button>
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

export default ItemDetails
