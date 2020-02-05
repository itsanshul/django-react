import React,{Component} from 'react';

class Header extends Component{

	render () {
		return (

				<header id="page-header">
			<div className="top-bar bg-dark text-gray">
				<div className="container">
					<div className="row top-bar-holder">
						<div className="col-xs-9 col">
							<ul className="font-lato list-unstyled bar-links">
								<li>
									<a href="tel:+611234567890">
										<strong className="dt element-block text-capitalize hd-phone">Call :</strong>
										<strong className="dd element-block hd-phone">+(61) 123 456 7890</strong>
										<i className="fas fa-phone-square hd-up-phone hidden-sm hidden-md hidden-lg"><span className="sr-only">phone</span></i>
									</a>
								</li>
								<li>
									<a href="mailto:&#069;&#120;&#097;&#109;&#112;&#108;&#101;&#064;&#100;&#111;&#109;&#097;&#105;&#110;&#046;&#099;&#111;&#109;">
										<strong className="dt element-block text-capitalize hd-phone">Email :</strong>
										<strong className="dd element-block hd-phone">&#069;&#120;&#097;&#109;&#112;&#108;&#101;&#064;&#100;&#111;&#109;&#097;&#105;&#110;&#046;&#099;&#111;&#109;</strong>
										<i className="fas fa-envelope-square hd-up-phone hidden-sm hidden-md hidden-lg"><span className="sr-only">email</span></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-xs-3 col justify-end">
							<ul className="list-unstyled user-links fw-bold font-lato">
								<li><a href="#popup1" className="lightbox">Login</a> <span className="sep">|</span> <a href="#popup2" className="lightbox">Register</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="header-holder">
				<div className="container">
					<div className="row">
						<div className="col-xs-6 col-sm-3">
							<div className="logo">
								<a href="./">
									<img src="static/images/logo-dark.png" alt="studylms" />
								</a>
							</div>
						</div>
						<div className="col-xs-6 col-sm-9 static-block">
							<nav id="nav" className="navbar navbar-default">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
								</div>
								<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<ul className="nav navbar-nav navbar-right main-navigation text-uppercase font-lato">
										<li>
											<a href="./" >home</a>
										</li>
										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Courses</a>
											<ul className="dropdown-menu">
												<li><a href="courses-list.html">Course List</a></li>
												<li><a href="course-single.html">Course Single</a></li>
											</ul>
										</li>
										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Events</a>
											<ul className="dropdown-menu">
												<li><a href="events-list.html">Event List</a></li>
												<li><a href="event-sigle.html">Event Single</a></li>
											</ul>
										</li>
										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
											<ul className="dropdown-menu">
												<li><a href="404.html">404 Page</a></li>
												<li><a href="about-us.html">About us</a></li>
												<li><a href="forum.html">Forum Page</a></li>
												<li><a href="forum-single.html">Forum Single</a></li>
												<li><a href="instructors-list.html">Instructors List</a></li>
												<li><a href="instructor-single.html">Instructors Single</a></li>
												<li><a href="login-register.html">Login &amp; Register</a></li>
											</ul>
										</li>
										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
											<ul className="dropdown-menu">
												<li><a href="blog.html">Blog List</a></li>
												<li><a href="blog-single.html">Blog Single</a></li>
											</ul>
										</li>
										<li className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
											<ul className="dropdown-menu">
												<li><a href="shop.html">Shop List</a></li>
												<li><a href="single-product.html">Shop Single</a></li>
												<li><a href="cartage.html">Cart Page</a></li>
												<li><a href="checkout.html">Checkout</a></li>
											</ul>
										</li>
										<li><a href="contact.html">contact</a></li>
									</ul>
								</div>
								<form action="#" className="navbar-form navbar-search-form navbar-right">
									<a className="fas fa-search search-opener" role="button" data-toggle="collapse" href="#searchCollapse" aria-expanded="false" aria-controls="searchCollapse"><span className="sr-only">search opener</span></a>
									<div className="collapse search-collapse" id="searchCollapse">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Search &hellip;" />
											<button type="button" className="fas fa-search btn"><span className="sr-only">search</span></button>
										</div>
									</div>
								</form>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>

			)
	}

}

export default Header;