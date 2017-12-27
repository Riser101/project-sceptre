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
			     <Typist cursor={{hideWhenDone: true, blink: true}}> 
			    	I build 
			    	<span> secure</span>
			    	<Typist.Backspace count={6} delay={1500} />
  					<span>scalable</span>
  					<Typist.Backspace count={8} delay={1500} />
  					<span>maintainable </span> 
  					<Typist.Backspace count={13} delay={1500} />
  					<span><em>awesome</em> enterprise web applications.</span> 
  				</Typist>
			    </h1>

				<p>for high growth <em>start-ups</em> and well sometimes for <em>myself</em>. 
			    <a href="#" onClick={this.eventToggleSidebar}> 
			    <br/>
			    Find out More</a></p>    
			</div>
			<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<ul>
						<li><em>PHP</em></li>
						<li><em>NodeJS</em></li>
						<li><em>Python</em></li>
						<li><em>Java</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<ul>
						<li><em>MySQL</em></li>	
						<li><em>MongoDB</em></li>	
						<li><em>Redis</em></li>	
						<li><em>Memcached</em></li>	
					</ul>
				</div>

				<div className="skill-item clearfix">	
					<ul>
						<li><em>RabbitMQ</em></li>
						<li><em>IronMQ</em></li>
						<li><em>Bash</em></li>
						<li><em>Graphite</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<ul className="clearfix">
						<li><em>Docker</em></li>
						<li><em>Ansible</em></li>
						<li><em>Apache Thrift</em></li>
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