import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Yousuf Syed</a>
			    <small>Software Engineer based in Pune, India. </small>
			    <a className="resume" href="https://drive.google.com/file/d/1e7Rq5uOS5t4hKjfGagT_fswhT6Q1KJhj/view" >
			    	Resume 
			    </a>
			    <a className="blog" href="https://iyousufsyed.wordpress.com/">Blog</a>
			  </h3>
			</div>
	</div>
	);
  }
}




export default Header;

