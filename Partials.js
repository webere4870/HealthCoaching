let nav=`
<nav>
<a href="./index.html" class="swipeInDude" style="margin-right: auto;">Logo</a>
<a href="./index.html" class="swipeInDude">Home</a>
<a href="./calendar.html" class="swipeInDude">Calendar</a>
<a href="./about.html" class="swipeInDude">About</a>
<a href="./history.html" class="swipeInDude">History</a>
<a href="./live.html" class="swipeInDude">Watch Live</a>
<a href="https://buy.stripe.com/14k2aV4Vt6DC944bII" target="_blank" class="swipeInDude">Donate</a>
<div class="mobileToggle"><i style="color: black" class="fas fa-bars"></i></div>
</nav>

<input type="checkbox" id="active">
<label for="active" class="menu-btn"><i style="color: black" class="fas fa-bars"></i></label>
<div class="wrapper">
    <ul>
    <li><a href="./index.html" class="swipeInDude">Home</a><li/>
    <li><a href="./calendar.html" class="swipeInDude">Calendar</a><li/>
    <li><a href="./about.html" class="swipeInDude">About</a><li/>
    <li><a href="./history.html" class="swipeInDude">History</a><li/>
    <li><a href="./live.html" class="swipeInDude">Watch Live</a><li/>
    <li><a href="https://buy.stripe.com/14k2aV4Vt6DC944bII" class="swipeInDude" target="_blank">Donate</a><li/>
    </ul>
</div> `

let footer = `<footer class="footer-section">
<div class="container">
    <div class=" pt-5 pb-5">
        <div class="row">
            <div style="width: 100%;" class="rowFlex">
                <h1 style="text-align: center; color: white;" class="afterUnderline">Find Us</h1>
            </div>
            
        </div>
    </div>
    <div id="mapid"></div>
    <div class="footer-content pt-5 pb-5">
        <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                    <div class="footer-logo">
                        <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"></a>
                    </div>
                    <div class="footer-text">
                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                        elit,Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="footer-social-icon">
                        <span>Follow us</span>
                        <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                    <div class="footer-widget-heading">
                        <h3>Useful Links</h3>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                    <div class="footer-widget-heading">
                        <h3>Subscribe</h3>
                    </div>
                    <div class="footer-text mb-25">
                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                    </div>
                    <div class="subscribe-form">
                        <form action="#">
                            <input type="text" placeholder="Email Address">
                            <button><i class="fab fa-telegram-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
<div class="copyright-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                    <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</footer>`


export {nav, footer}