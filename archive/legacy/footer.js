// JavaScript Document

$(document).ready(function(e) {
    commonfooter();
    
});

function commonfooter(){
    var html =`
 
<footer id="site-footer" class=" bgdark padding_top">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer_panel padding_bottom_half bottom20">
                    <a href="../home" class="footer_logo bottom25"><img src="../images/logo-transparent.png" alt=""></a>
                    <p class="whitecolor bottom25"><strong>For Product Sales</strong><br><a href="mailto:sales@nimaisoft.com">sales@nimaisoft.com</a></p>
                    <p class="whitecolor bottom25"><strong>For Project RFQs/Enquiries</strong><br><a href="mailto:projects@nimaisoft.com">projects@nimaisoft.com</a></p>
                    <p class="whitecolor bottom25"><strong>Write to us</strong><br><a href="mailto:info@nimaisoft.com">info@nimaisoft.com</a></p>
                    <p class="whitecolor bottom25">
                    <strong><a href="https://preciouscareers.com/careers?comp_id=CfQwb/xx/c5wl9Phd9t87w==" target="_blank">Careers</a></strong> &nbsp; | &nbsp;  
                    <strong><a href="../home#contact">Contact Us</a></strong></p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                    <h3 class="whitecolor bottom25">Offerings</h3>
                    <ul class="links">
                        <li><a href="../offerings/dt" class="">Digital Transformation</a></li>
                        <li><a href="../offerings/mobile" class=" scrollupto">Mobile Apps</a></li>
                        <li><a href="../offerings/cloud" class="">Cloud & Web Apps</a></li>
                        <li><a href="../offerings/ai" class="">AI & Data Science</a></li>
                        <li><a href="../offerings/da" class="">Data Analytics</a></li>
                        <li><a href="../offerings/iot" class="">IOT Services</a></li>
                        <li><a href="../consulting" class="">Consulting</a></li>
                        <li><a href="../proddevelopment" class="">Product Development</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                    <h3 class="whitecolor bottom25">Solutions</h3>
                    <ul class="links">
                        <li><a href="../solutions#AgilePolicing" class="">Agile Policing</a></li>
                        <li><a href="../solutions#PreciousCareers" class=" scrollupto">Precious Careers</a></li>
                        <li><a href="../solutions#nkarta" class="">nkarta</a></li>
                        <li><a href="../solutions#PreciousDonor" class="">Precious Donor</a></li>
                        <li><a href="../solutions#DivineKshetraConnect" class="">DKC</a></li>
                        <li><a href="../solutions#MDMMS" class="">MDMMS</a></li>
                        <li><a href="../solutions#nkXPert" class="">nkXPert</a></li>
                        <li><a href="../solutions#pconte" class="">Precious Connect</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                    <h3 class="whitecolor bottom25">Industries</h3>
                    <ul class="links">
                        <li><a href="../industries#Financial" class="">Financial Services</a></li>
                        <li><a href="../industries#Shipping" class="">Shipping & Logistics</a></li>
                        <li><a href="../industries#HealthCare" class="">Health Care</a></li>
                        <li><a href="../industries#NonProfit" class="">Non Profit</a></li>
                        <li><a href="../industries#Learning" class="">e-Learning</a></li>
                        <li><a href="../industries#Manufacturing" class="">Manufacturing</a></li>
                        <li><a href="../industries#Retail" class="">Retail & Consumers</a></li>
                        <li><a href="../industries#Hospitality" class="">Hospitality & Travel</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr>
        <div class="row bottom-bar">
            <div class="col-lg-4">
            <ul class="social-icons white wow fadeInUp" data-wow-delay="300ms">
                        <li><a href="https://www.facebook.com/NimaisoftSystems/" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i> </a> </li>
                        <li><a href="https://twitter.com/nimaisoft" target="_blank" class="twitter"><i class="fab fa-twitter"></i> </a> </li>
                        <li><a href="https://www.linkedin.com/company/nimaisoft-systems-pvt-ltd" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i> </a> </li>
                        <!--<li><a href="javascript:void(0)" class="insta"><i class="fab fa-instagram"></i> </a> </li>-->
                    </ul>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-3 text-center">
                        <div class="iso">
                            <p><span>9001:2015</span><img class="img-fluid" src="../images/Iso.png" alt=""/></p>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="Membership">
                            <p><span>Membership with</span><a href="https://theitaap.org" target="_blank"><img class="img-fluid" src="../images/ittap-white.png" alt=""/></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row bottom-bar text-center bottom-footer">
            <div class="col-md-12">
                <p>copyright © 2020 Nimaisoft Systems Pvt.Ltd., | 
                <!--<strong><a href="../sitemap" target="_blank">Site Map</a></strong> | -->
                <strong><a href="../sitemap" target="_blank">Site Map</a></strong> |
                <strong><a href="../termsofuse" target="_blank">Terms of Use</a></strong> | 
                <strong><a href="../privacypolicy" target="_blank">Privacy Policy</a></strong> | 
                <strong><a href="../cookiespolicy" target="_blank">Cookies Policy</a></strong> | 
                R10.11</p>
                </div>
        </div>
        
    </div>
</footer> 
    `;

$('.commonfooter').html(html);
    
}
