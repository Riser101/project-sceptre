import React, { Component } from 'react';
import Banner from './layout/Banner';
import Typist from 'react-typist';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

    	

      	<div className="posts">

      		<div className="post banner">
			    <h1 className="post-title">
			    I build 
			    <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications.</h1>
    			<p>for high growth <em>start-ups</em> and well sometimes for <em>myself</em>. <a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>

			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side</h4>
					<ul className="">
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
							</ul>
						</li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side </h4>
					<ul>
						<li><em><b>*</b>PHP</em></li>
						<li><em><b>*</b>.NET</em></li>
						<li><em><b>*</b>Python</em></li>
						<li><em><b>*</b>NodeJS</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Mocha</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Nginx</em></li>
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Gulp</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/Riser101/project-sceptre">github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical rendered.</em>
				</div>

  			</div>


  			<div className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="wechat-logo">wechat</li>
					<li className="bms-logo"> <a href="https://bookmyshow.com"> </a>bookmyshow</li>
					<li className="wingify-logo">wingify</li>
				</ul>

			</div>

			<Banner />

  		</div>
  
    );
  }
}

export default Home;