// JavaScript Document

$(document).ready(function(e) {
    commonHeader();
});

function commonHeader(){
	var html =`
	<div class="top-stp">

        <div class="desktop-top-stip">
        <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                <ul class="social-icons-simple white">
                <li class="d-table">
                    <a href="https://www.facebook.com/NimaisoftSystems/" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i> </a> 
                </li>
                <li class="d-table">
                <a href="https://twitter.com/nimaisoft" target="_blank" class="twitter"><i class="fab fa-twitter"></i> </a> </li>
                <li class="d-table"><a href="https://www.linkedin.com/company/nimaisoft-systems-pvt-ltd" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i> </a> </li>
            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="d-flex float-right whitecolor">
							<li class="d-table">
                    <a href="mailto:sales@nimaisoft.com"><i class="fa fa-envelope" aria-hidden="true"></i> sales@nimaisoft.com   | </a> 
                </li>
                                <a href="https://preciouscareers.com/careers?comp_id=CfQwb/xx/c5wl9Phd9t87w==" target="_blank"><li>Careers  | </li></a>
                                <a href="../home#contact"><li>Contact Us</li></a>
                                
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        
        <div class="mobile-top-stip">
        <div class="container">
        <div class="row">
        	<div class="col-md-12">
            	<ul>
                	<li><a href="https://www.facebook.com/NimaisoftSystems/" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i> </a></li>
                    <li><a href="https://twitter.com/nimaisoft" target="_blank" class="twitter"><i class="fab fa-twitter"></i> </a></li>
					<li><a href="https://www.linkedin.com/company/nimaisoft-systems-pvt-ltd" target="_blank"><i class="fab fa-linkedin-in"></i> </a> </li>
                    <li><a href="https://preciouscareers.com/careers?comp_id=CfQwb/xx/c5wl9Phd9t87w==" target="_blank"><i class="fa fa-briefcase" aria-hidden="true"></i></a></li>
                    <li><a href="../home#contact" target="_blank"><i class="fa fa-address-book" aria-hidden="true"></i></a></li>
                    <li><a href="mailto:sales@nimaisoft.com" ><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        
	</div>
	
<header class="site-header" id="header">
   <nav class="navbar navbar-expand-lg darkcolor transparent-bg static-nav">
        <div class="container">
            <a class="navbar-brand" href="../home">
                <img src="../images/logo-transparent.png" alt="logo" class="logo-default">
                <img src="../images/logo-transparent.png" alt="logo" class="logo-scrolled">
            </a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto d-none" id="fullMenu">
                    <li class="nav-item"> <a class="nav-link" href="../home"><i class="fas fa-home top-icon"></i></a></li>
                    <li class="nav-item"> <a class="nav-link" href="../company/aboutus">About Us</a></li>
                    <li class="nav-item"> <a class="nav-link" href="../home#Approach">Approach</a></li>
                    <li class="nav-item"> <a class="nav-link" href="../offerings">Offerings</a></li>
                    <li class="nav-item"> <a class="nav-link" href="../consulting">Consulting</a></li>
                    <li class="nav-item"> <a class="nav-link" href="../solutions">Solutions</a></li>
                    <li class="nav-item"> <a class="nav-link" href="../proddevelopment">Product Development</a></li>
                    <li class="nav-item"> <a class="nav-link" href="../industries">Industries</a></li>
                    <li class="nav-item"> <a class="nav-link" href="../techstack">Tech Stack</a></li>
                </ul>
            </div>
        </div>
        <a href="javascript:void(0)" class="sidemenu_btn" id="sidemenu_toggle">
            <span class=""></span> 
            <span class=""></span> 
            <span class=""></span>
        </a>
    </nav>
   
    <div class="side-menu gradient-bg">
        <div class="overlay"></div>
        <div class="inner-wrapper">
            <span class="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
            <nav class="side-nav w-100">
                <ul class="navbar-nav">
                    <li class="nav-item"><i class="fas fa-home"></i>
						<a class="nav-link" href="../home">Home</a></li>
                    <li class="nav-item"><i class="fas fa-info-circle"></i>
						<a class="nav-link " href="../company/aboutus">About Us</a></li>
					<li class="nav-item"><i class="fas fa-sitemap"></i>
						<a class="nav-link " href="../home#Approach">Approach</a></li>
                    <li class="nav-item"><i class="fas fa-chalkboard-teacher"></i>
						<a class="nav-link" href="../offerings">Offerings</a></li>
                    <li class="nav-item"><i class="fas fa-cogs"></i>
						<a class="nav-link " href="../consulting">Consulting</a></li>
                    <li class="nav-item"><i class="fas fa-file-invoice"></i>
						<a class="nav-link " href="../solutions">Solutions</a></li>
                    <li class="nav-item"><i class="fas fa-file-code" ></i>
						<a class="nav-link " href="../proddevelopment">Product Development</a></li>
					<li class="nav-item"><i class="fas fa-industry"></i>
						<a class="nav-link " href="../industries">Industries</a></li>
                    <li class="nav-item"><i class="fas fa-microchip"></i>
						<a class="nav-link " href="../techstack">Tech Stack</a></li>
					<li class="nav-item"><i class="fas fa-briefcase" aria-hidden="true"></i>
						<a class="nav-link" href="https://preciouscareers.com/careers?comp_id=CfQwb/xx/c5wl9Phd9t87w==" target="_blank">Careers</a></li>
					<li class="nav-item"><i class="fas fa-address-book"></i>
						<a class="nav-link "href="../home#contact">Contact Us</a></li>
					
                </ul>
            </nav>
        </div>
    </div>
    <div id="close_side_menu"></div>
    
</header>

<div>
    <div class="bottomdialogContainer dialogContainer bottom left d-none" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			
		<div class="dialog" data-dialog-id="dm-accept-cookies" data-set-cookie="365">
			<div class="close disagreeCookies" id="closeBtn" data-dialog-action="hide">
				<img class="img-fluid" src="images/close.png" alt=""/>
			</div>
			<div class="dialogContent">
				<img width="50" class="avatar" src="https://designmodo.com/wp-content/themes/designmodo/assets/img/misc/cookie.png" alt="Cookie Icon">
				<div class="text">We use cookies to enhance the functionality of our site and conduct anonymous analytics. 
                    
                    <div class="hiddenContent">
                        <div>
                             With your permission , we may also use cookies to share information about your use of our Site with our social media, advertising and analytics partners. To learn more, see our <a class="semiBold text-primary" href="../cookiespolicy" target="_blank" data-wpel-link="internal">Cookie Policy.</a>.
                        <br>
                        <div class="button small passive hover-red wide cropSides disagreeCookies" data-dialog-action="hide" id="disagree">I disagree</div>
                        <div class="button small passive hover-green wide cropSides allowCookies" data-dialog-action="close" id="agree">I agree</div>
						<br>
                        </div>
                       
                       <br>

                    </div>
                </div>
				
			</div>
		</div>
	</div>
    </div>

`;

$('.commonHeader').html(html);

var cookiesAllowed = localStorage.getItem("cookiesAllowed")

if(!cookiesAllowed || !cookiesAllowed=='true') {
    $('.bottomdialogContainer').removeClass('d-none')
}

$(document).on("click",".disagreeCookies",function() {
    $('.bottomdialogContainer').addClass('d-none')
});

$(document).on("click",".allowCookies",function() {
    $('.bottomdialogContainer').addClass('d-none')
    localStorage.setItem("cookiesAllowed", 'true')
});
	
    sidebar_door();
    
}
