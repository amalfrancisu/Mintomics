import React from 'react'

function Footer() {
    return (
        <div>
                <footer class="footer-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-1">
                                <div class="widget">
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="#">Profile</a></li>
                                        <li><a href="#">Publish</a></li>
                            
                                    </ul>
                                </div>
                            </div>
                        
                            <div class="col-md-6 col-sm-6 col-xs-1">
                                <div class="widget">
                                    <h5>Newsletter</h5>
                                    <p>Signup for our newsletter to get the latest news in your inbox.</p>
                                    <form action="blank.php" class="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                        <div class="col text-center">
                                            <input class="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <a href="#" id="btn-subscribe"><i class="arrow_right bg-color-secondary"></i></a>
                                            <div class="clearfix"></div>
                                        </div>
                                    </form>
                                    {/* <!-- <div class="spacer-10"></div>
                                    <small>Your email is safe with us. We don't spam.</small> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subfooter">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="de-flex">
                                        <div class="de-flex-col">
                                            <a href="index.html">
                                                <img alt="" class="f-logo" src="assets/images/logoxxx.png" /><span class="copy">&copy; MINTOMICS</span>
                                            </a>
                                        </div>
                                        <div class="de-flex-col">
                                            <div class="social-icons">
                                                <a href="https://www.facebook.com/AngelHackHQ/?hc_ref=ARTAN2M1NGdF8Foc0apAqAfA3lNUfQ3cfJiiEaVcSaPbj3P4nrpiEhfjB3NsOIYJNuY&fref=nf&__tn__=kC-R"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/decentology?lang=en"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="https://www.linkedin.com/company/flow-blockchain/?originalSubdomain=ca"><i class="fa fa-linkedin fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>            
        </div>
    )
}

export default Footer
