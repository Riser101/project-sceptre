import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Yousuf Syed</a>
			    <small>Software Engineer based in Pune, India. </small>
			    <a className="resume" href="https://app.box.com/s/su7n3loiwvdx63quqm9txe3nodmtdekk" >
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

