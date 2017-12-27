import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Yousuf Syed</a>
			    <small>Software Engineer based in Pune, India. </small>
			    <a className="resume" href="https://drive.google.com/file/d/12ZZ8ee3eA8rQMlkJBw1SblLs6M0KGlCi/view?usp=sharing" >RESUME</a>
			  </h3>
			</div>
	</div>
	);
  }
}

export default Header;