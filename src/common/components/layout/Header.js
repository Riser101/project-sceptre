import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Yousuf Syed</a>
			    <small>Software Engineer based in Pune, India. </small>
			    <a className="resume" href="https://docs.google.com/document/d/1JssJ1gMoRcrz-y2s64hk2O0O8Va72tqa5zzQUzNYi0k/edit?usp=sharing" >
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