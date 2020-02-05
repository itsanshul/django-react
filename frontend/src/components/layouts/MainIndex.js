import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { getCourseList } from '../../actions/course';
import propTypes from 'prop-types';

class MainIndex extends Component{
	static propTypes = {
		getCourseList: propTypes.func.isRequired,
	}
	componentDidMount(){
		this.props.getCourseList();
	}
	render () {
		return (

			<main id="main">
			<section className="intro-learn-search-block bg-cover text-center" style={{backgroundImage: `url(static/images/img82.jpg)`}}>
				<div className="container holder">
					
					<div className="align">
						<form action="#" className="align learn-search-form text">
							<h1>Learn from the best. anywhere.</h1>
							<p>Creative and business skills you can use today.</p>
							<div className="input-group">
								<input type="text" className="form-control" placeholder="What do you want to learn today?" />
								<span className="input-group-btn">
									<button className="btn btn-warning btn-theme" type="button"><i className="fas fa-search"></i></button>
								</span>
							</div>
							
							<ul className="list-unstyled learning-cources-list text-left">
								<li>
									<a href="#">
										<i className="far fa-user icn"></i>
										<span className="text">More than 320 Instructors</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="far fa-file-alt icn"></i>
										<span className="text">25000+ online courses</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-desktop icn"></i>
										<span className="text">Learn anything online.</span>
									</a>
								</li>
							</ul>
						</form>
					</div>
				</div>
			</section>
			
			<aside className="bg-gray featured-columns-aside">
				<div className="container">
					<div className="row">
						<article className="col-xs-12 col-sm-6 col-md-4">
							
							<a href="#" className="featured-column element-block text-center">
								<img src="static/images/img83.jpg" alt="image description" />
								<div className="caption text-white">
									<h3>Best Photography Lessons</h3>
								</div>
							</a>
						</article>
						<article className="col-xs-12 col-sm-6 col-md-4">
							
							<a href="#" className="featured-column element-block text-center">
								<img src="static/images/img84.jpg" alt="image description" />
								<div className="caption text-white">
									<h3>Tutorial Codes for Startup</h3>
								</div>
							</a>
						</article>
						<article className="col-xs-12 col-sm-6 col-md-4">
							
							<a href="#" className="featured-column element-block text-center">
								<img src="static/images/img85.jpg" alt="image description" />
								<div className="caption text-white">
									<h3>Wordpress Secret Tips</h3>
								</div>
							</a>
						</article>
					</div>
				</div>
			</aside>
			
			<section className="popular-posts-block container">
				<header className="popular-posts-head">
					<h2 className="popular-head-heading">Most Popular Courses</h2>
				</header>
				<div className="row">
					
					<div className="slider popular-posts-slider">
						
							{this.props.courseList.map(course => (
								<div>
							<div className="col-xs-12" key={course.id}>
								
								<article className="popular-post">
									<div className="aligncenter">
										<img src="static/images/img02.jpg" alt="image description" />
									</div>
									<div>
										<strong className="bg-primary text-white font-lato text-uppercase price-tag">{'$'+course.pricing}</strong>
									</div>
									<h3 className="post-heading"><a href="course-single.html">{course.title}</a></h3>
									<div className="post-author">
										<div className="alignleft rounded-circle no-shrink">
											<a href="instructor-single.html"><img src="static/images/img06.jpg" className="rounded-circle" alt="image description" /></a>
										</div>
										<h4 className="author-heading"><a href="instructor-single.html"></a></h4>
									</div>
									<footer className="post-foot gutter-reset">
										<ul className="list-unstyled post-statuses-list">
											<li>
												<a href="#">
													<span className="fas icn fa-users no-shrink"><span className="sr-only">users</span></span>
													<strong className="text fw-normal">98</strong>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="fas icn no-shrink fa-comments"><span className="sr-only">comments</span></span>
													<strong className="text fw-normal">10</strong>
												</a>
											</li>
										</ul>
										<ul className="star-rating list-unstyled">
											<li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
											<li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
											<li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
											<li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
											<li><span className="fas fa-star"><span className="sr-only">star</span></span></li>
										</ul>
									</footer>
								</article>
							</div>
						   </div> 
							))}
						
						
						<div>
							
						</div>
					</div>
				</div>
			</section>
			
			<aside className="bg-cover categories-aside text-center" style={{backgroundImage: `url(static/images/img14.jpg)`}}>
				<div className="container holder">
					
					<ul className="list-unstyled categories-list">
						<li>
							<a href="#">
								<div className="align">
									<span className="icn-wrap">
										<img src="static/images/icon04.svg" width="43" height="43" alt="image description" />
									</span>
									<strong className="h h5 element-block text-uppercase">Business</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div className="align">
									<span className="icn-wrap">
										<img src="static/images/icon05.svg" width="44" height="48" alt="image description" />
									</span>
									<strong className="h h5 element-block text-uppercase">Language</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div className="align">
									<span className="icn-wrap">
										<img src="static/images/icon06.svg" width="51" height="42" alt="image description" />
									</span>
									<strong className="h h5 element-block text-uppercase">Programming</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div className="align">
									<span className="icn-wrap">
										<img src="static/images/icon07.svg" width="51" height="42" alt="image description" />
									</span>
									<strong className="h h5 element-block text-uppercase">Film &amp; Video</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div className="align">
									<span className="icn-wrap">
										<img src="static/images/icon08.svg" width="51" height="39" alt="image description" />
									</span>
									<strong className="h h5 element-block text-uppercase">Photography</strong>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div className="align">
									<span className="icn-wrap">
										<img src="static/images/icon09.svg" width="51" height="51" alt="image description" />
									</span>
									<strong className="h h5 element-block text-uppercase">Web Design</strong>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</aside>
			
			<section className="container how-work-block text-center">
				<header className="seperator-head">
					<h2>How Our Classes Work</h2>
					<p>Share your work to collaboratve with our vibrant design element.</p>
				</header>
				
				<div className="row">
					<div className="steps-guide-holder">
						<div className="col-xs-12 col-sm-6 col-md-3">
							
							<div className="guide-column">
								<span className="icn-wrap"><i className="far fa-user icn"></i></span>
								<h3 className="fw-normal">Become a Member</h3>
								<p>We choose to go to the moon in this decade and the other.</p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3">
							
							<div className="guide-column">
								<span className="icn-wrap"><i className="far fa-question-circle icn"></i></span>
								<h3 className="fw-normal">Learn by Doing</h3>
								<p>We choose to go to the moon in this decade and the other.</p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3">
							
							<div className="guide-column">
								<span className="icn-wrap"><i className="fas fa-book icn"></i></span>
								<h3 className="fw-normal">Preview the Syllabus</h3>
								<p>We choose to go to the moon in this decade and the other.</p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-3">
							
							<div className="guide-column">
								<span className="icn-wrap"><i className="far fa-thumbs-up icn"></i></span>
								<h3 className="fw-normal">Take a Course</h3>
								<p>We choose to go to the moon in this decade and the other.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="news-block bg-gray">
				<div className="container">
					<header className="seperator-head text-center">
						<h2>Recent News</h2>
						<p>Share your work to collaboratve with our vibrant design element.</p>
					</header>
					<div className="row">
						<div className="col-xs-12 col-md-6">
							
							<article className="news-column-post">
								<div className="alignleft no-shrink">
									<a href="blog-single.html"><img src="static/images/img86.jpg" alt="image description" /></a>
								</div>
								<div className="descr-wrap">
									<h3 className="fw-normal"><a href="blog-single.html">Best Educational Psd Template Launching Today</a></h3>
									<p>Areas tackled in the most fundamental parts of medical research include cellu lar and molecular biology&hellip;</p>
									<time dateTime="2011-01-12" className="element-block text-uppercase">Mar 05,2017  by <a href="blog-single.html">andrew caset</a></time>
								</div>
							</article>
						</div>
						<div className="col-xs-12 col-md-6">
							
							<article className="news-column-post">
								<div className="alignleft no-shrink">
									<a href="blog-single.html"><img src="static/images/img87.jpg" alt="image description" /></a>
								</div>
								<div className="descr-wrap">
									<h3 className="fw-normal"><a href="blog-single.html">10 New Online Courses for Creative Students</a></h3>
									<p>Areas tackled in the most fundamental parts of medical research include cellu lar and molecular biology&hellip;</p>
									<time dateTime="2011-01-12" className="element-block text-uppercase">Mar 05,2017  by <a href="blog-single.html">andrew caset</a></time>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
			<aside className="bg-theme aside-note-block text-white">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-8 col">
							<span className="icn-wrap alignleft element-block">
								<img src="static/images/icon10.png" alt="image description" />
							</span>
							<div className="descr-wrap">
								<h3>New Student Join Every Week</h3>
								<p><strong className="fw-semi">New courses, interesting posts, popular books and much more!</strong></p>
							</div>
						</div>
						<div className="col-xs-12 col-sm-4 col text-right">
							<a href="#" className="btn btn-white btn-default text-capitalize font-lato fw-normal">Apply Course Now</a>
						</div>
					</div>
				</div>
			</aside>
			
			<section className="container professionals-block">
				<header className="block-header">
					<h2 className="block-header-heading">Our Instructors</h2>
					<p>We have more than 3,250 skilled & professional Instructors</p>
				</header>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-3">
						
						<article className="pro-column over text-center">
							<div className="aligncenter">
								<a href="instructor-single.html"><img src="static/images/img58.jpg" alt="Steaven Maseri Designer" /></a>
								<div className="caption">
									<ul className="socail-networks list-unstyled">
										<li><a href="#" className="facebook"><span className="fab fa-facebook-f"></span></a></li>
										<li><a href="#" className="twitter"><span className="fab fa-twitter"></span></a></li>
										<li><a href="#" className="google"><span className="fab fa-google-plus-g"></span></a></li>
									</ul>
								</div>
							</div>
							<h3 className="fw-normal text-capitalize"><a href="instructor-single.html">Steaven Maseri</a></h3>
							<h4 className="fw-normal text-capitalize">Designer</h4>
							<p>Fundamental parts of medi cal research include cellular and mol lecular biology.</p>
						</article>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-3">
						
						<article className="pro-column over text-center">
							<div className="aligncenter">
								<a href="instructor-single.html"><img src="static/images/img59.jpg" alt="Jackson James Designer" /></a>
								<div className="caption">
									<ul className="socail-networks list-unstyled">
										<li><a href="#" className="facebook"><span className="fab fa-facebook-f"></span></a></li>
										<li><a href="#" className="twitter"><span className="fab fa-twitter"></span></a></li>
										<li><a href="#" className="google"><span className="fab fa-google-plus-g"></span></a></li>
									</ul>
								</div>
							</div>
							<h3 className="fw-normal text-capitalize"><a href="instructor-single.html">Jackson James</a></h3>
							<h4 className="fw-normal text-capitalize">Designer</h4>
							<p>Fundamental parts of medi cal research include cellular and mol lecular biology.</p>
						</article>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-3">
						
						<article className="pro-column over text-center">
							<div className="aligncenter">
								<a href="instructor-single.html"><img src="static/images/img60.jpg" alt="Thorsten Tailor Artist" /></a>
								<div className="caption">
									<ul className="socail-networks list-unstyled">
										<li><a href="#" className="facebook"><span className="fab fa-facebook-f"></span></a></li>
										<li><a href="#" className="twitter"><span className="fab fa-twitter"></span></a></li>
										<li><a href="#" className="google"><span className="fab fa-google-plus-g"></span></a></li>
									</ul>
								</div>
							</div>
							<h3 className="fw-normal text-capitalize"><a href="instructor-single.html">Thorsten Tailor</a></h3>
							<h4 className="fw-normal text-capitalize">Artist</h4>
							<p>Fundamental parts of medi cal research include cellular and mol lecular biology.</p>
						</article>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-3">
						
						<article className="pro-column over text-center">
							<div className="aligncenter">
								<a href="instructor-single.html"><img src="static/images/img61.jpg" alt="Katrine Fonsmark Literature" /></a>
								<div className="caption">
									<ul className="socail-networks list-unstyled">
										<li><a href="#" className="facebook"><span className="fab fa-facebook-f"></span></a></li>
										<li><a href="#" className="twitter"><span className="fab fa-twitter"></span></a></li>
										<li><a href="#" className="google"><span className="fab fa-google-plus-g"></span></a></li>
									</ul>
								</div>
							</div>
							<h3 className="fw-normal text-capitalize"><a href="instructor-single.html">Katrine Fonsmark</a></h3>
							<h4 className="fw-normal text-capitalize">Literature</h4>
							<p>Fundamental parts of medi cal research include cellular and mol lecular biology.</p>
						</article>
					</div>
				</div>
			</section>
			
			<section className="testimonials-block text-center bg-cover" style={{backgroundImage: `url(static/images/img88.jpg)`}}>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-10 col-sm-offset-1">
							<h2 className="text-white">What People Say</h2>
							
							<div className="slick-slider slider testimonail-slider">
								<div>
									
									<blockquote className="testimonial-quote font-serif text-white">
										<p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
										<cite className="element-block font-lato">
											<span className="avatar rounded-circle element-block">
												<img className="rounded-circle" src="static/images/img89.jpg" alt="Nethor Doct -Developer" />
											</span>
											<strong className="element-block h5 h text-yellow">Nethor Doct <span className="text-white">- Developer</span></strong>
										</cite>
									</blockquote>
								</div>
								<div>
									
									<blockquote className="testimonial-quote font-serif text-white">
										<p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
										<cite className="element-block font-lato">
											<span className="avatar rounded-circle element-block">
												<img className="rounded-circle" src="static/images/img16.jpg" alt="Nethor Doct -Developer" />
											</span>
											<strong className="element-block h5 h text-yellow">Nethor Doct <span className="text-white">- Developer</span></strong>
										</cite>
									</blockquote>
								</div>
								<div>
									
									<blockquote className="testimonial-quote font-serif text-white">
										<p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
										<cite className="element-block font-lato">
											<span className="avatar rounded-circle element-block">
												<img className="rounded-circle" src="static/images/img89.jpg" alt="Nethor Doct -Developer" />
											</span>
											<strong className="element-block h5 h text-yellow">Nethor Doct <span className="text-white">- Developer</span></strong>
										</cite>
									</blockquote>
								</div>
								<div>
									
									<blockquote className="testimonial-quote font-serif text-white">
										<p>“ Trent from punchy rollie grab us a waggin school. Flat out like a bludger where he hasn't got a damper. As stands out like brass razoo heaps it'll be relo. As busy as a paddock.”</p>
										<cite className="element-block font-lato">
											<span className="avatar rounded-circle element-block">
												<img className="rounded-circle" src="static/images/img16.jpg" alt="Nethor Doct -Developer" />
											</span>
											<strong className="element-block h5 h text-yellow">Nethor Doct <span className="text-white">- Developer</span></strong>
										</cite>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<article className="why-lms-block container">
				<div className="row">
					<div className="col-xs-12 col-md-4 col">
						<h2 className="sep-heading">See Video Tour</h2>
						
						<div className="widget widget_intro">
							<div className="aligncenter overlay">
								<a href="http://www.youtube.com/embed/9bZkp7q19f0?autoplay=1" className="btn-play far fa-play-circle lightbox fancybox.iframe"></a>
								<img src="static/images/img32.jpg" alt="image description" />
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-md-4 col">
						<h2 className="sep-heading">Upcoming Courses</h2>
						
						<section className="widget widget_popular_posts">
							
							<ul className="widget-cources-list list-unstyled">
								<li>
									<a href="instructor-single.html">
										<div className="alignleft large">
											<img src="static/images/img90.jpg" alt="image description" />
										</div>
										<div className="description-wrap">
											<h4>Your Complete Guide to Photography - <strong className="fw-normal text-primary">$58.00</strong></h4>
											<div className="post-author">
												<div className="alignleft rounded-circle no-shrink">
													<img src="static/images/img07.jpg" className="rounded-circle" alt="image description" />
												</div>
												<h4 className="author-heading">Sarah Johnson</h4>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a href="instructor-single.html">
										<div className="alignleft large">
											<img src="static/images/img91.jpg" alt="image description" />
										</div>
										<div className="description-wrap">
											<h4>How to Become a Startup Founder - <strong className="fw-normal text-success">Free</strong></h4>
											<div className="post-author">
												<div className="alignleft rounded-circle no-shrink">
													<img src="static/images/img06.jpg" className="rounded-circle" alt="image description" />
												</div>
												<h4 className="author-heading">Keny White</h4>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</section>
					</div>
					<div className="col-xs-12 col-md-4 col">
						<h2 className="sep-heading">Why We Best</h2>
						
						<div className="panel-group why-panel-group" id="accordion" role="tablist" aria-multiselectable="true">
							
							<div className="panel panel-default">
								<div className="panel-heading" role="tab" id="headingOne">
									<h4 className="panel-title fw-normal">
										<a className="accOpener element-block" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Learn anything online</a>
									</h4>
								</div>
								<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
									<div className="panel-body">
										<p>Areas tackled the most fundamental parts of medical research include cellular way and molecular biology medical genetics immunology neu science and psychology</p>
									</div>
								</div>
							</div>
							
							<div className="panel panel-default">
								<div className="panel-heading" role="tab" id="headingTwo">
									<h4 className="panel-title fw-normal">
										<a className="accOpener element-block" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Basic to advance course</a>
									</h4>
								</div>
								<div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
									<div className="panel-body">
										<p>Areas tackled the most fundamental parts of medical research include cellular way and molecular biology...</p>
									</div>
								</div>
							</div>
							
							<div className="panel panel-default">
								<div className="panel-heading" role="tab" id="headingThree">
									<h4 className="panel-title fw-normal">
										<a className="accOpener element-block" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Free Video Tutorials</a>
									</h4>
								</div>
								<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
									<div className="panel-body">
										<p>Areas tackled the most fundamental parts of medical research include cellular way and molecular biology medical genetics immunology neu science and psychology</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
			
			<aside className="subscription-aside-block bg-gray">
				
				<form action="#" className="container newsletter-sub-form">
					<div className="row form-holder">
						<div className="col-xs-12 col-sm-6 col">
							<div className="text-wrap">
								<span className="element-block icn no-shrink rounded-circle bg-theme text-white"><i className="far fa-envelope-open"><span className="sr-only">icn</span></i></span>
								<div className="inner-wrap">
									<label htmlFor="email" className="text-dark">Signup for Newsletter</label>
									<p>Subscribe now and receive weekly newsletter with new updates.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col">
							<div className="input-group">
								<input type="email" id="email" className="form-control" placeholder="Enter your email&hellip;" />
								<span className="input-group-btn">
									<button className="btn btn-dark text-uppercase" type="button">Submit</button>
								</span>
							</div>
						</div>
					</div>
				</form>
			</aside>
		</main>

			)
	}
}
const mapStateToProps = state =>({
	courseList: state.course.list
});
export default connect(mapStateToProps, { getCourseList })(MainIndex);