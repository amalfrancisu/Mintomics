import React from 'react'

function CreateSeries() {
    return (
        <div>
                <div className="no-bottom no-top" id="content">
                    <div id="top"></div>

                    {/* <!-- section begin --> */}
                    <section id="subheader" className="text-light" data-bgimage="url(assets/images/background/subheader.jpg) top">
                        <div className="center-y relative text-center">
                            <div className="container">
                                <div className="row">

                                    <div className="col-md-12 text-center">
                                        <h1>Create Comic</h1>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- section close --> */}


                    {/* <!-- section begin --> */}
                    <section aria-label="section">

                        <div className="container">
                            <form id="form-create-item" className="form-border" method="post" action="email.php">
                                <div className="row fadeIn">
                                    <div className="col-lg-7 offset-lg-1">

                                        <div className="field-set">

                                            <h5>Comic Title</h5>
                                            <input type="text" name="item_title" id="item_title" className="form-control"
                                                placeholder="Less than 50 characters" />
                                            <div className="spacer-10"></div>
                                            <div className="spacer-single"></div>

                                            <h5>Genre 1</h5>
                                            <input type="text" name="item_title" id="item_title" className="form-control"
                                                placeholder="e.g. 'Superhero'" />
                                            <div className="spacer-single"></div>
                                            <div className="spacer-10"></div>

                                            <h5>Genre 2</h5>
                                            <input type="text" name="item_title" id="item_title" className="form-control"
                                                placeholder="e.g. 'Superhero'" />
                                            <div className="spacer-single"></div>
                                            <div className="spacer-10"></div>

                                            <h5>Description</h5>
                                            <textarea rows="4" cols="50" data-autoresize name="item_desc" id="item_desc"
                                                className="form-control" placeholder=" Less than 1000 characters"></textarea>
                                            <div className="spacer-single"></div>
                                            <div className="spacer-10"></div>

                                            <h5>Royalties</h5>
                                            <p>Percentage fee</p>
                                            <input type="number" name="royalties" id="royalties" className="form-control"
                                                placeholder={0.00} />
                                            <div className="spacer-single"></div>
                                            <div className="spacer-single"></div>

                                            <input type="button" id="submit" className="btn-main" value="Create Item"/>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 col-sm-6 col-xs-12">
                                        <h5>Upload thumbnail</h5>
                                        <div className="nft__item">

                                            <input accept="image/*" type='file' id="imgInp1" />
                                            <img id="blah1" className="nft__item_wrap" src="#" alt="your image" />
                                            <p>This image will be used for featuring your comics on the homepage, category pages, or
                                                other promotional areas of Mintomics. 600 x 400 recommended.</p>

                                        </div>


                                    </div>

                                </div>
                        
                            </form>
                        </div>
                    </section>

                </div>            
        </div>
    )
}

export default CreateSeries
