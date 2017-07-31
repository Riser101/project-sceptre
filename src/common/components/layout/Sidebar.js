import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	<div className="sidebar">

		  <div className="sidebar-item sidebar-footer">
		    <p>This is part of project sceptre, built in Redux and React.</p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</Link>
		    <Link to="/about" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">About</Link>
		  </nav>

		  <div className="sidebar-item sidebar-footer">

		    <p>
				Visit <a href="https://github.com/Riser101"> my GitHub</a><br/>
				Visit <a href="https://www.linkedin.com/in/yousuf-syed-72ba4bb1/">my Linkedin</a><br/>
				Visit <a href="https://twitter.com/YousufSyed5">my Twitter</a><br/>
				Visit <a href="https://www.facebook.com/sy.yousuf9106">my Facebook</a><br/>
		    </p>

		    <p>
		    	Design based on <a href="http://lanyon.getpoole.com/"> Lanyon Theme</a> 
		    </p>

		  </div>

		</div>
    );
  }
}

export default Sidebar;