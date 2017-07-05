import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>About Me</h3>

      	  	<p> I graduated from <a href="http://www.mitpune.com/">MIT, Pune </a> in 2015 majoring in Computer Science. When they were teaching civil and mechanical engineering courses in my first year, I was self-learning Java and built my very first android app called <a href="https://play.google.com/store/apps/details?id=com.myapp.tasbeeh"> tasbeeh.</a></p>

            <p> After college I started working for <a href="https://bookmyshow.com"> bookmyshow </a>, a ticketing platform. Worked on projects involving technologies like NodeJS, PHP, .NET and AngularJS.  Open sourced some of my work there including a <a href="https://github.com/Riser101/php-rmqlib">php wrapper for amqp based rabbitmq library.  </a></p> 
            
            <p>Over the years, I have adopted, mastered and moved on from many languages, frameworks and architectures. I currently focus on PHP heavy web application development.</p>

      	  	<h3>About Site</h3>

      	  	<p>This site is a single page web app built with React and Redux. It is Isomorphic which has the advantage of initially rendering quicker and being indexed by search engines.</p>
      	  	
      	  	<p>Feel free to use this sites code for whatever you want. I hope it inspires you to build something awesome or learn something new.</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/Riser101?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>

      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;